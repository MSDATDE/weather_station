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
exports.MeasurementData = void 0;
const typeorm_1 = require("typeorm");
const Devices_1 = require("./Devices");
let MeasurementData = class MeasurementData extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], MeasurementData.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ type: 'float', nullable: false }),
    __metadata("design:type", Number)
], MeasurementData.prototype, "temperature", void 0);
__decorate([
    typeorm_1.Column({ type: 'float', nullable: false }),
    __metadata("design:type", Number)
], MeasurementData.prototype, "pressure", void 0);
__decorate([
    typeorm_1.Column({ type: 'float', nullable: false }),
    __metadata("design:type", Number)
], MeasurementData.prototype, "humidity", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', length: 254, nullable: false }),
    __metadata("design:type", String)
], MeasurementData.prototype, "location", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', length: 254, nullable: false }),
    __metadata("design:type", String)
], MeasurementData.prototype, "place", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], MeasurementData.prototype, "created_at", void 0);
__decorate([
    typeorm_1.ManyToOne(type => Devices_1.Devices, device => device.measurementData),
    __metadata("design:type", Devices_1.Devices)
], MeasurementData.prototype, "device", void 0);
MeasurementData = __decorate([
    typeorm_1.Entity()
], MeasurementData);
exports.MeasurementData = MeasurementData;
