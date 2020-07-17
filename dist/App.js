"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const DbConnectionService_1 = require("./service/DbConnectionService");
class App {
    constructor(appInit) {
        this.app = express_1.default();
        this.port = appInit.port;
        this.middleWares(appInit.middleWares);
        this.routes(appInit.controllers);
    }
    middleWares(middleWares) {
        middleWares.forEach(middleWare => {
            this.app.use(middleWare);
        });
    }
    routes(controllers) {
        controllers.forEach(controller => {
            this.app.use('/', controller.router);
        });
    }
    async listen() {
        await DbConnectionService_1.connection;
        this.app.listen(this.port, () => {
            console.log(`App listenig on the http://localhost:${this.port}`);
        });
    }
}
exports.default = App;
