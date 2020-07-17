"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MeasurementsDataRepository = void 0;
const typeorm_1 = require("typeorm");
const MeasurementData_1 = require("../entity/MeasurementData");
let MeasurementsDataRepository = class MeasurementsDataRepository extends typeorm_1.Repository {
    async createMeasurementsData(measurementsDataModel, device) {
        const measurementData = new MeasurementData_1.MeasurementData();
        measurementData.temperature = measurementsDataModel.temperature;
        measurementData.pressure = measurementsDataModel.pressure;
        measurementData.humidity = measurementsDataModel.humidity;
        measurementData.location = measurementsDataModel.location;
        measurementData.place = measurementsDataModel.place;
        measurementData.device = device;
        try {
            await measurementData.save();
        }
        catch (error) {
            console.error(error);
        }
        return measurementData;
    }
};
MeasurementsDataRepository = __decorate([
    typeorm_1.EntityRepository(MeasurementData_1.MeasurementData)
], MeasurementsDataRepository);
exports.MeasurementsDataRepository = MeasurementsDataRepository;
