import { MeasurementsDataRepository } from "../repository/MeasurementsDataRepository";
import { MeasurementsDataModel } from "../model/MeasurementsDataModel";
import { MeasurementData } from "../entity/MeasurementData";
import { Devices } from "src/entity/Devices";


export class MeasurementsDataService {
    private measurementsDataRepository: MeasurementsDataRepository;

    constructor() {
        this.measurementsDataRepository = new MeasurementsDataRepository();
    }

    public async createMeasurementsData(measurementsDataModel: MeasurementsDataModel, device: Devices): Promise<MeasurementData> {
        return await this.measurementsDataRepository.createMeasurementsData(measurementsDataModel, device);
    }
}
