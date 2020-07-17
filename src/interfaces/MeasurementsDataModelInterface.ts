export interface MeasurementsDataModelInterface {
    temperature: number;
    pressure: number;
    humidity: number;
    location: string;
    place: string;
    created_at?: Date;
    device_name: string;
}
