const fs = require("fs");

// 直接注入到js文件起始部分

const pluginsNames = [
    "minerva_hook.js",
];

let lastReadDiskTs = 0;
let pluginsJsCodeCache = "";

// 带缓存的读取插件，是为了在支持热加载的情况下尽可能的少读硬盘
export function loadPluginsAsStringWithCache() {
    // 这是假设访问都是集中在某个时间段的
    if (new Date().getTime() - lastReadDiskTs <= 1_000) {
        return pluginsJsCodeCache;
    }
    lastReadDiskTs = new Date().getTime();
    return pluginsJsCodeCache = loadPluginsAsString();
}

// 把所有插件加载为 String
export function loadPluginsAsString() {

    // 用来保证Hook代码只被加载一次
    // TODO 妥善处理Worker环境
    const loadOnce = "\n" +
        "   if (!window) {\n" +
        "       return; \n" +
        "   } \n" +
        "   if (window.cc11001100_hook_done) {\n" +
        "       return;\n" +
        "   }\n" +
        "   window.cc11001100_hook_done = true;\n\n";


    const pluginsJsContentArray = [];
    const pluginsBaseDirectory = `${__dirname}/../plugins/`;
    for (let pluginName of pluginsNames) {
        const pluginFilePath = pluginsBaseDirectory + "/" + pluginName;
        const pluginJsContent = fs.readFileSync(pluginFilePath).toString();
        pluginsJsContentArray.push(pluginJsContent);
    }

    return "\n(() => {\n" +
        loadOnce +
        pluginsJsContentArray.join("\n\n") +
        "})();\n"
}

