"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const DevicesService_1 = require("../service/DevicesService");
const MeasurementsDataService_1 = require("../service/MeasurementsDataService");
const MeasurementsDataModel_1 = require("../model/MeasurementsDataModel");
const MeasurementsDataValidator_1 = require("../validators/MeasurementsDataValidator");
class MeasurementsDataController {
    constructor() {
        this.path = '/messdata';
        this.router = express_1.default.Router();
        try {
            this.initRouters();
        }
        catch (error) {
            console.error(error);
        }
    }
    initRouters() {
        try {
            this.router.post(this.path, this.saveMeasurementsData);
        }
        catch (error) {
            console.error(error);
        }
    }
    async saveMeasurementsData(req, res) {
        try {
            const deviceService = new DevicesService_1.DevicesService();
            const device = await deviceService.getByApiToken(req.header('apiToken'));
            if (!device) {
                return res.status(401).json({ 'error': true, 'message': 'Device not found' });
            }
            const validator = new MeasurementsDataValidator_1.MeasurementsDataValidator();
            const valid = await validator.validate(req.body);
            if (typeof valid !== 'boolean') {
                return res.status(401).json(valid);
            }
            const measurementsDataService = new MeasurementsDataService_1.MeasurementsDataService();
            const measurementsData = await measurementsDataService.createMeasurementsData(req.body, device);
            const measurementsDataModel = new MeasurementsDataModel_1.MeasurementsDataModel(measurementsData);
            return res.status(200).json(measurementsDataModel);
        }
        catch (error) {
            console.error(error);
        }
    }
}
exports.default = MeasurementsDataController;
