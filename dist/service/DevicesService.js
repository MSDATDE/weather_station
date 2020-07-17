"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DevicesService = void 0;
const DevicesRepository_1 = require("../repository/DevicesRepository");
const Devices_1 = require("../entity/Devices");
const typeorm_1 = require("typeorm");
class DevicesService {
    constructor() {
        this.devicesRepository = new DevicesRepository_1.DevicesRepository();
    }
    async createDevice(deviceModel) {
        return await this.devicesRepository.createDevice(deviceModel);
    }
    async updateDevice(id, deviceModel) {
        const { device_name } = deviceModel;
        const device = await typeorm_1.getRepository(Devices_1.Devices).findOne(id);
        device.device_name = device_name;
        await device.save();
        return device;
    }
    async getAllDevices() {
        return await typeorm_1.getRepository(Devices_1.Devices).createQueryBuilder('devices').paginate();
    }
    async deleteDevice(id) {
        return await typeorm_1.getRepository(Devices_1.Devices).delete(id);
    }
    async getByApiToken(api_token) {
        return await typeorm_1.getRepository(Devices_1.Devices).findOne({ 'api_token': api_token });
    }
}
exports.DevicesService = DevicesService;
