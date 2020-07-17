"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("config"));
const App_1 = __importDefault(require("./App"));
const body_parser_1 = __importDefault(require("body-parser"));
const loggerMiddleware_1 = __importDefault(require("./middleware/loggerMiddleware"));
const paginationMiddleware_1 = require("./middleware/paginationMiddleware");
const HomeController_1 = __importDefault(require("./controller/HomeController"));
const DeviceController_1 = __importDefault(require("./controller/DeviceController"));
const MeasurementsDataController_1 = __importDefault(require("./controller/MeasurementsDataController"));
const port = parseInt(process.env.PORT || config_1.default.get('server.port'));
const app = new App_1.default({
    port: port,
    middleWares: [
        body_parser_1.default.json(),
        body_parser_1.default.urlencoded({ extended: true }),
        loggerMiddleware_1.default,
        paginationMiddleware_1.pagination
    ],
    controllers: [
        new HomeController_1.default(),
        new DeviceController_1.default(),
        new MeasurementsDataController_1.default()
    ]
});
app.listen();
