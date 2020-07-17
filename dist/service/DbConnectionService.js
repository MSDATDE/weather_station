"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connection = void 0;
const typeorm_1 = require("typeorm");
const config_1 = __importDefault(require("config"));
const dbHost = config_1.default.get('database.host');
const dbPort = config_1.default.get('database.port');
const dbUsername = config_1.default.get('database.username');
const dbPassword = config_1.default.get('database.password');
const dbDatabase = config_1.default.get('database.database');
const dbsynchronize = config_1.default.get('database.synchronize');
exports.connection = typeorm_1.createConnection({
    type: "mysql",
    host: process.env.HOSTNAME || dbHost,
    port: process.env.DB_PORT || dbPort,
    username: process.env.DB_USERNAME || dbUsername,
    password: process.env.DB_PASSWORD || dbPassword,
    database: process.env.DB_DATABASE || dbDatabase,
    entities: [__dirname + '/../entity/*.{js,ts}'],
    synchronize: process.env.TYPEORM_SYNC || dbsynchronize,
}).then(connection => {
    console.log("DB connected");
}).catch(error => console.error(error));
