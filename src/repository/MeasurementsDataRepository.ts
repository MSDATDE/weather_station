import { Repository, EntityRepository } from "typeorm";
import { MeasurementData } from "../entity/MeasurementData";
import { MeasurementsDataModel } from "../model/MeasurementsDataModel";
import { Devices } from "../entity/Devices";

@EntityRepository(MeasurementData)

export class MeasurementsDataRepository extends Repository<MeasurementData>{

    public async createMeasurementsData(measurementsDataModel: MeasurementsDataModel, device: Devices): Promise<MeasurementData> {
        const measurementData = new MeasurementData()
        measurementData.temperature = measurementsDataModel.temperature;
        measurementData.pressure = measurementsDataModel.pressure;
        measurementData.humidity = measurementsDataModel.humidity;
        measurementData.location = measurementsDataModel.location;
        measurementData.place = measurementsDataModel.place;
        measurementData.device = device;
        try {
            await measurementData.save()
        } catch (error) {
            console.error(error);
        }

        return measurementData;
    }
}

