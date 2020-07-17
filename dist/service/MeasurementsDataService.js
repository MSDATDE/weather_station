"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MeasurementsDataService = void 0;
const MeasurementsDataRepository_1 = require("../repository/MeasurementsDataRepository");
class MeasurementsDataService {
    constructor() {
        this.measurementsDataRepository = new MeasurementsDataRepository_1.MeasurementsDataRepository();
    }
    async createMeasurementsData(measurementsDataModel, device) {
        return await this.measurementsDataRepository.createMeasurementsData(measurementsDataModel, device);
    }
}
exports.MeasurementsDataService = MeasurementsDataService;
