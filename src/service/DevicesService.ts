import { DevicesRepository } from "../repository/DevicesRepository";
import { DeviceModel } from "../model/DeviceModel";
import { Devices } from "../entity/Devices";
import { getRepository, DeleteResult } from "typeorm";

export class DevicesService {
    private devicesRepository: DevicesRepository;

    constructor() {
        this.devicesRepository = new DevicesRepository();
    }

    public async createDevice(deviceModel: DeviceModel): Promise<Devices> {
        return await this.devicesRepository.createDevice(deviceModel);
    }

    public async updateDevice(id: number, deviceModel: DeviceModel): Promise<Devices> {
        const { device_name } = deviceModel;
        const device = await getRepository(Devices).findOne(id);
        device.device_name = device_name;
        await device.save();
        return device;
    }

    public async getAllDevices(): Promise<any> {
        return await getRepository(Devices).createQueryBuilder('devices').paginate();
    }

    public async deleteDevice(id: number): Promise<DeleteResult> {
        return await getRepository(Devices).delete(id);
    }

    public async getByApiToken(api_token: string): Promise<Devices> {
        return await getRepository(Devices).findOne({ 'api_token': api_token });
    }

}