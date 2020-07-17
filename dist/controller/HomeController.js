"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
class HomeController {
    constructor() {
        this.path = '/';
        this.router = express_1.default.Router();
        this.initRouters();
    }
    async initRouters() {
        try {
            this.router.get(this.path, this.index);
        }
        catch (error) {
            console.error(error);
        }
    }
    async index(req, res) {
        try {
            const greating = {
                'Application': 'Weather Station DB App',
                'Vesrsion': '1.0.0',
                'Creator': 'Sebastian Majchrzak <smajchrzak@msdat.de>'
            };
            res.json(greating);
        }
        catch (error) {
            console.error(error);
        }
    }
}
exports.default = HomeController;
