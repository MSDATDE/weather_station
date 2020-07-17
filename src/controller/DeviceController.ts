import express from 'express'
import { Request, Response } from 'express'
import ControllerBaseInteface from '../interfaces/ControllerBaseInterface'
import { DevicesService } from '../service/DevicesService'

class DeviceController implements ControllerBaseInteface {

    public path = '/devices'
    public router = express.Router()


    constructor() {
        try {
            this.initRouters();
        } catch (error) {
            console.error(error)
        }
    }

    public async initRouters(): Promise<any> {
        try {
            this.router.get(this.path, this.allDevices);
            this.router.post(this.path, this.createDevice);
            this.router.patch(this.path + '/:id', this.updateDevice);
            this.router.delete(this.path + '/:id', this.deleteDevice);
        } catch (error) {
            console.error(error)
        }
    }

    private async createDevice(req: Request, res: Response): Promise<any> {
        try {
            const deviceService = new DevicesService();
            const device = await deviceService.createDevice(req.body);
            return res.status(200).json(device);
        } catch (error) {
            console.error(error)
        }
    }

    private async updateDevice(req: Request, res: Response): Promise<any> {
        try {
            const deviceService = new DevicesService();
            const id = parseInt(req.params.id);
            const device = await deviceService.updateDevice(id, req.body);
            return res.status(200).json(device);
        } catch (error) {
            console.error(error)
        }
    }

    private async allDevices(req: Request, res: Response): Promise<any> {
        try {
            const deviceService = new DevicesService();
            let devices = await deviceService.getAllDevices();
            return res.status(200).json(devices);
        } catch (error) {
            console.error(error)
        }
    }

    private async deleteDevice(req: Request, res: Response): Promise<any> {
        try {
            const deviceService = new DevicesService();
            const id = parseInt(req.params.id);
            const deleteREsult = await deviceService.deleteDevice(id);
            return res.status(200).json(deleteREsult);
        } catch (error) {
            console.error(error)
        }
    }

}

export default DeviceController;