import { exportFunction } from "../components/core/core";

import express from "express";
import bodyParser from "body-parser";
import * as http from 'http';
import * as express_validator from 'express-validator';

const app = express();

app.get("/export_function",
    [express_validator.query('fileName').exists(), express_validator.query('funcName').exists()],
    function (request, response) {
        const fileName = request.query.fileName;
        const funcName = request.query.funcName;
        let code = "";
        try {
            code = exportFunction(fileName, funcName);
        } catch (e) {
            console.error(e);
            code = e.stack;
        }
        response.setHeader("Content-Type", "text/plain; charset=utf-8");
        response.setHeader("Access-Control-Allow-Origin", "*");
        response.setHeader("Access-Control-Allow-Methods", "*");
        response.send(code);
        response.end();
    })

export function startApi() {
    const port = 10010;
    app.listen(port, function () {
        console.log(`Api服务 启动成功，端口:${port}`);
    })
}