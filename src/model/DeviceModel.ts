export class DeviceModel {
    id?: number;
    device_name: string;
    api_token?: string;
    created_at?: Date;
    updated_at?: Date;

    constructor(device: any) {
        this.id = device.id;
        this.device_name = device.device_name;
        this.api_token = device.api_token;
        this.created_at = device.created_at;
        this.updated_at = device.updated_at;
    }
}