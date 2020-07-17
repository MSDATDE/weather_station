import { MeasurementsDataModelInterface } from "../interfaces/MeasurementsDataModelInterface";


export class MeasurementsDataModel implements MeasurementsDataModelInterface {

    temperature: number;
    pressure: number;
    humidity: number;
    location: string;
    place: string;
    created_at?: Date;
    device_name: string;

    constructor(measurementData: any) {
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
