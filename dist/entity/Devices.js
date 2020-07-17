"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Devices = void 0;
const typeorm_1 = require("typeorm");
const MeasurementData_1 = require("./MeasurementData");
let Devices = class Devices extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Devices.prototype, "id", void 0);
__decorate([
    typeorm_1.Index('device_name', { unique: true }),
    typeorm_1.Column({ type: 'varchar', length: 191, nullable: false }),
    __metadata("design:type", String)
], Devices.prototype, "device_name", void 0);
__decorate([
    typeorm_1.Index('api_token', { unique: true }),
    typeorm_1.Column({ type: 'varchar', length: 191 }),
    __metadata("design:type", String)
], Devices.prototype, "api_token", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], Devices.prototype, "created_at", void 0);
__decorate([
    typeorm_1.UpdateDateColumn(),
    __metadata("design:type", Date)
], Devices.prototype, "updated_at", void 0);
__decorate([
    typeorm_1.OneToMany(type => MeasurementData_1.MeasurementData, measurementData => measurementData.device),
    __metadata("design:type", Array)
], Devices.prototype, "measurementData", void 0);
Devices = __decorate([
    typeorm_1.Entity()
], Devices);
exports.Devices = Devices;
