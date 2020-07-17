"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MeasurementsDataModel = void 0;
class MeasurementsDataModel {
    constructor(measurementData) {
        console.log(measurementData);
        this.temperature = measurementData.temperature;
        this.pressure = measurementData.pressure;
        this.humidity = measurementData.humidity;
        this.location = measurementData.location;
        this.place = measurementData.place;
        this.created_at = measurementData.created_at;
        this.device_name = measurementData.device.device_name;
    }
}
exports.MeasurementsDataModel = MeasurementsDataModel;
