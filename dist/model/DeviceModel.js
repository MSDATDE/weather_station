"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeviceModel = void 0;
class DeviceModel {
    constructor(device) {
        this.id = device.id;
        this.device_name = device.device_name;
        this.api_token = device.api_token;
        this.created_at = device.created_at;
        this.updated_at = device.updated_at;
    }
}
exports.DeviceModel = DeviceModel;
