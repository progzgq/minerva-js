const coreComponent = require("../components/core/core");

module.exports = {
    // 某些情况下载请求发送之前就替换会失败，所以只替换响应的body比较稳妥
    * beforeSendResponse(requestDetail, responseDetail) {
        coreComponent.process(requestDetail, responseDetail);
    }
}