import { Repository, EntityRepository } from "typeorm";
import { Devices } from '../entity/Devices'
import { DeviceModel } from "../model/DeviceModel";
import { TokenGeneratorService } from "../service/TokenGeneratorService";

@EntityRepository(Devices)
export class DevicesRepository extends Repository<Devices> {

    public async createDevice(createDevice: DeviceModel): Promise<Devices> {
        const tokenGenerator = new TokenGeneratorService()

        const { device_name } = createDevice;

        const device = new Devices();
        device.device_name = device_name;
        device.api_token = await tokenGenerator.generateToken(64);

        try {
            await device.save();
        } catch (error) {
            console.error(error);
        }
        return device;
    }
}