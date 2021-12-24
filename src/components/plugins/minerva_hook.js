const messageDomain = "minerva_hook";
const messageTypeSearch = "search";

// 防止消息重复处理
const alreadyProcessMessageIdSet = new Set();

window.addEventListener("message", event => {
    const eventData = event.data;
    if (!eventData || eventData.domain !== messageDomain) {
        return;
    }

    // 如果已经处理过的话，则不再处理
    const messageId = eventData.messageId;
    if (alreadyProcessMessageIdSet.has(messageId)) {
        return;
    }

    if (eventData.type === messageTypeSearch) {
        const pattern = eventData.pattern;
        const isEquals = eventData.isEquals;
        const fieldName = eventData.fieldName;
        const isNeedExpansion = eventData.isNeedExpansion;
        _search(fieldName, pattern, isEquals, isNeedExpansion);
        alreadyProcessMessageIdSet.add(messageId);
        _searchParentAndChildren(messageId, fieldName, pattern, isEquals, isNeedExpansion);
    }

});

if (!window.minerva_hook) {
    window.minerva_hook = {
        scope_db: {},
        scope_stack: [],
        beforeFunction: function (funcName, f, f_arguments, ...params) {
            if (!f) {
                return;
            }
            let scope_id = `${funcName}_${new Date().getTime()}_${Math.random()}`;
            f.minerva_scope_id = scope_id;
            this.scope_db[scope_id] = { f: f, codeLocation: getCodeLocation(), scope_id: scope_id, params: params, f_arguments: f_arguments };
            this.scope_stack.push(scope_id);
        },
        afterFunction: function (funcName, f, scope) {
            if (!f) {
                return;
            }
            let f_scope = this.scope_db[f.minerva_scope_id];
            if (!f_scope) { return; }
            f_scope.scope = {};
            Object.assign(f_scope.scope, scope);
        },
        search: function (pattern, isEquals = false, isNeedExpansion = false) {
            let fieldName = '';
            _search(fieldName, pattern, isEquals, isNeedExpansion);
            const messageId = new Date().getTime();
            alreadyProcessMessageIdSet.add(messageId);
            // 然后递归搜索父页面和子页面
            _searchParentAndChildren(messageId, fieldName, pattern, isEquals, isNeedExpansion);
        }
    }
}

function getCodeLocation() {
    const callstack = new Error().stack.split("\n");
    while (callstack.length > 0 && callstack[0].indexOf("beforeFunction") === -1) {
        callstack.shift();
    }
    if (callstack.length < 2) {
        return null;
    }
    callstack.shift();
    return callstack.shift();
}

function _searchParentAndChildren(messageId, fieldName, pattern, isEquals, isNeedExpansion) {
    const searchMessage = {
        "domain": messageDomain,
        "type": messageTypeSearch,
        "fieldName": fieldName,
        "messageId": messageId,
        pattern,
        isEquals,
        isNeedExpansion
    }

    // 子页面
    const iframeArray = document.getElementsByTagName("iframe");
    if (iframeArray.length) {
        for (let iframe of iframeArray) {
            iframe.contentWindow.postMessage(searchMessage, "*");
        }
    }

    // 父页面
    if (window.parent) {
        window.parent.postMessage(searchMessage, "*");
    }
}

function _search(filedName, pattern, isEquals, isNeedExpansion) {
    const result = [];
    const expansionValues = isNeedExpansion ? expansionS(pattern) : [pattern];
    for (let sid of minerva_hook.scope_stack) {
        let s = minerva_hook.scope_db[sid].scope;
        if (!s) {
            continue;
        }
        for (let key of Object.getOwnPropertyNames(s)) {
            let value = s[key];
            let typeofv = typeof value;
            if (typeofv === 'string' || typeofv === 'number') {
                value = value.toString();
            } else {
                continue;
            }
            // console.log(value);
            let isMatch = false;
            if (typeof pattern === "string") {
                if (isEquals) {
                    for (let newPattern of expansionValues) {
                        isMatch = isMatch || (newPattern === value);
                    }
                } else {
                    for (let newPattern of expansionValues) {
                        isMatch = isMatch || (value && value.indexOf(newPattern) !== -1);
                    }
                }
            } else if (pattern instanceof RegExp) {
                isMatch = pattern.test(value);
            }
            if (!isMatch) {
                continue;
            }
            console.log(minerva_hook.scope_db[sid]);
            return s;
        }
    }
}

minerva_hook = window.minerva_hook;
