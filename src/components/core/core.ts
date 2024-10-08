const fs = require("fs");
const shell = require("shelljs");
const crypto = require("crypto");
const cheerio = require("cheerio");

import { loadPluginsAsStringWithCache } from "./plugins-manager";
import { processJs } from "../pass/pass-manager";
import * as functionExporter from './function-exporter';

interface Meta {
    url: string,
    filepath: string,
    astFilePath?: string,
    cacheTime: number,
}

// 注入Hook成功的文件暂存到哪个目录下，因为注入实在是太慢了，落盘以应对频繁重启
const injectSuccessJsFileCacheDirectory = "./js-file-cache";
const injectSuccessJsFileCacheOriginDirectory = "./js-file-cache-origin";
const injectSuccessJsFileCacheMetaFile = `${injectSuccessJsFileCacheDirectory}/meta.jsonl`

const injectSuccessJsFileCache = new Map<string, Meta>();

const disableCache = false;

(function initInjectSuccessJsFileCache() {
    ensureDirectoryExists(injectSuccessJsFileCacheDirectory);
    ensureDirectoryExists(injectSuccessJsFileCacheOriginDirectory);
    if (!exists(injectSuccessJsFileCacheMetaFile)) {
        return;
    }
    const metaStr = fs.readFileSync(injectSuccessJsFileCacheMetaFile).toString();
    if (!metaStr) {
        return;
    }
    metaStr.split("\n").forEach(line => {
        if (!line) {
            return;
        }
        const meta = JSON.parse(line);
        injectSuccessJsFileCache.set(meta.url, meta);
    });
    console.log(`缓存文件已加载完毕，目前有缓存 ${injectSuccessJsFileCache.size}个`);
})();

// 判断是否是HTML类型的响应内容
function isHtmlResponse(responseDetail) {
    for (let key in responseDetail.response.header) {
        if (key.toLowerCase() === "content-type" && responseDetail.response.header[key].toLowerCase().toLowerCase().indexOf("text/html") !== -1) {
            if (!responseDetail.response.header[key].toLowerCase().endsWith("charset=utf-8")) {
                responseDetail.response.header[key] = responseDetail.response.header[key] + ";charset=UTF-8";
            }
            return true;
        }
    }
    return false;
}

// HTML中可能会夹带script标签，里面的JS代码也要能Hook到
function processHtmlResponse(requestDetail, responseDetail) {
    // 使用了这个库来解析HTML  https://github.com/chishui/JSSoup
    // 上面那个库有bug，替换为这个库： https://github.com/cheeriojs/cheerio/

    // 对所有的内嵌JavaScript内容注入Hook
    const url = requestDetail.url;
    const body = responseDetail.response.body.toString();

    if (!body.length) {
        return;
    }

    const $ = cheerio.load(body);
    const scriptArray = $("script");
    if (!scriptArray?.length) {
        return;
    }
    let alreadyInjectHookContext = false;
    for (let script of scriptArray) {

        // 对于是src引用的外部，其标签内容都会被忽略
        if (script.attribs.src) {
            continue;
        }

        // 空script
        if (!script.children.length) {
            continue;
        }

        // script的内容
        let jsCode = "";
        for (let child of script.children) {
            jsCode += child.data;
        }
        if (!jsCode) {
            return;
        }

        let newJsCode = processJs(jsCode).toCode();
        // 随着script替换时注入，不创建新的script标签
        if (!alreadyInjectHookContext) {
            newJsCode = loadPluginsAsStringWithCache() + newJsCode;
            alreadyInjectHookContext = true;
        }

        const newScript = cheerio.load("<script>" + newJsCode + "</script>")("script");
        newScript.attribs = script.attribs;
        $(script).replaceWith(newScript);
    }
    responseDetail.response.body = $.html();
}

/**
 * 判断请求头，请求头里的content-type字段如果包含javascript字样的话则认为是JavaScript字样
 *
 * @param responseDetail
 * @returns {boolean}
 */
function isJavaScriptResponse(responseDetail) {
    for (let key in responseDetail.response.header) {
        if (key.toLowerCase() === "content-type" && responseDetail.response.header[key].toLowerCase().toLowerCase().indexOf("javascript") !== -1) {
            if (!responseDetail.response.header[key].toLowerCase().endsWith("charset=utf-8")) {
                responseDetail.response.header[key] = responseDetail.response.header[key] + ";charset=UTF-8";
            }
            return true;
        }
    }
    return false;
}

//
function processJavaScriptResponse(requestDetail, responseDetail) {
    // 这样粗暴地搞可能会有问题，比如淘宝那种贼恶心的模块加载方式
    // const url = requestDetail.url.split("?")[0];
    const url = requestDetail.url;

    const body = responseDetail.response.body.toString();
    if (isNeedIgnoreHook(url, body, requestDetail)) {
        return;
    }

    if (disableCache || body.length <= 2000) {
        processRealtime(responseDetail, url, body);
    } else if (injectSuccessJsFileCache.has(url)) {
        processFromCache(responseDetail, url, body);
    } else {
        processRealtime(responseDetail, url, body);
    }
}

function isNeedIgnoreHook(url: string, body, requestDetail) {
    return body.startsWith("{") || url.indexOf('firebaseio.com') > 0 || url.indexOf('h/b/flow') > 0
}

function processFromCache(responseDetail, url, body) {
    const meta = injectSuccessJsFileCache.get(url);
    const fileContent = fs.readFileSync(meta.filepath).toString();
    responseDetail.response.body = loadPluginsAsStringWithCache() + fileContent;
}

function processRealtime(responseDetail, url, body) {
    const md5 = crypto.createHash("md5");
    const md5Digest = md5.update(url).digest("hex");
    const cacheFilePath = injectSuccessJsFileCacheDirectory + "/" + md5Digest + ".js";
    // const astCacheFilePath = injectSuccessJsFileCacheDirectory + "/" + md5Digest + ".json";
    const originFilePath = injectSuccessJsFileCacheOriginDirectory + "/" + md5Digest + ".js";
    if (!disableCache) {
        fs.writeFileSync(originFilePath, body);
    }

    let passResult = processJs(body);
    let newJsCode = passResult.toCode();
    newJsCode = newJsCode.replace(/"use strict";/g, '');

    const meta = {
        url,
        filepath: cacheFilePath,
        cacheTime: new Date().getTime()
    };
    if (!disableCache) {
        fs.writeFileSync(cacheFilePath, newJsCode);
        fs.appendFileSync(injectSuccessJsFileCacheMetaFile, JSON.stringify(meta) + "\n");
    }
    injectSuccessJsFileCache.set(url, meta);
    responseDetail.response.body = loadPluginsAsStringWithCache() + newJsCode;
}

function ensureDirectoryExists(directory) {
    // 如果指定的目录不存在的话则创建
    if (exists(directory)) {
        return;
    }
    shell.mkdir("-p", directory);
    console.log(`mkdir ${directory}`);
}

function exists(path) {
    try {
        fs.statSync(path);
        return true;
    } catch (e) {
        return e.message.indexOf("no such file or directory") === -1;
    }
}

export function process(requestDetail, responseDetail) {
    console.log("process content:" + requestDetail.url);
    // if (requestDetail.url.indexOf("static.pddpic.com") < 0) {
    //     return;
    // }
    // let pp = false;
    // if (requestDetail.url.indexOf('orchestrate') > 0) {
    //     pp = true
    //     console.log('find orchestrate')
    // }
    try {
        if (isHtmlResponse(responseDetail)) {
            try {
                processHtmlResponse(requestDetail, responseDetail);
            } catch (e) {
                console.error(e);
            }
            return;
        }

        if (isJavaScriptResponse(responseDetail)) {
            try {
                processJavaScriptResponse(requestDetail, responseDetail);
            } catch (e) {
                console.error(e);
            }
            return;
        }
    } catch (err) {
        console.error(err)
    }
}

export function exportFunction(fileName: string, funcName: string): string {
    for (let url of injectSuccessJsFileCache.keys()) {
        if (url.includes(fileName)) {
            const meta = injectSuccessJsFileCache.get(url);
            let jscode = fs.readFileSync(meta.filepath).toString();
            return functionExporter.exportFunction(jscode, funcName);
        }
    }
    return `没有找到与: ${fileName} 匹配的文件`;

}