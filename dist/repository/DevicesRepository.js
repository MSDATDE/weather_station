"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DevicesRepository = void 0;
const typeorm_1 = require("typeorm");
const Devices_1 = require("../entity/Devices");
const TokenGeneratorService_1 = require("../service/TokenGeneratorService");
let DevicesRepository = class DevicesRepository extends typeorm_1.Repository {
    async createDevice(createDevice) {
        const tokenGenerator = new TokenGeneratorService_1.TokenGeneratorService();
        const { device_name } = createDevice;
        const device = new Devices_1.Devices();
        device.device_name = device_name;
        device.api_token = await tokenGenerator.generateToken(64);
        try {
            await device.save();
        }
        catch (error) {
            console.error(error);
        }
        return device;
    }
};
DevicesRepository = __decorate([
    typeorm_1.EntityRepository(Devices_1.Devices)
], DevicesRepository);
exports.DevicesRepository = DevicesRepository;
