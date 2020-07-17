"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const DevicesService_1 = require("../service/DevicesService");
class DeviceController {
    constructor() {
        this.path = '/devices';
        this.router = express_1.default.Router();
        try {
            this.initRouters();
        }
        catch (error) {
            console.error(error);
        }
    }
    async initRouters() {
        try {
            this.router.get(this.path, this.allDevices);
            this.router.post(this.path, this.createDevice);
            this.router.patch(this.path + '/:id', this.updateDevice);
            this.router.delete(this.path + '/:id', this.deleteDevice);
        }
        catch (error) {
            console.error(error);
        }
    }
    async createDevice(req, res) {
        try {
            const deviceService = new DevicesService_1.DevicesService();
            const device = await deviceService.createDevice(req.body);
            return res.status(200).json(device);
        }
        catch (error) {
            console.error(error);
        }
    }
    async updateDevice(req, res) {
        try {
            const deviceService = new DevicesService_1.DevicesService();
            const id = parseInt(req.params.id);
            const device = await deviceService.updateDevice(id, req.body);
            return res.status(200).json(device);
        }
        catch (error) {
            console.error(error);
        }
    }
    async allDevices(req, res) {
        try {
            const deviceService = new DevicesService_1.DevicesService();
            let devices = await deviceService.getAllDevices();
            return res.status(200).json(devices);
        }
        catch (error) {
            console.error(error);
        }
    }
    async deleteDevice(req, res) {
        try {
            const deviceService = new DevicesService_1.DevicesService();
            const id = parseInt(req.params.id);
            const deleteREsult = await deviceService.deleteDevice(id);
            return res.status(200).json(deleteREsult);
        }
        catch (error) {
            console.error(error);
        }
    }
}
exports.default = DeviceController;
