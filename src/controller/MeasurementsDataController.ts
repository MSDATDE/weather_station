import express from 'express';
import { Request, Response } from 'express';
import ControllerBaseInteface from '../interfaces/ControllerBaseInterface'
import { DevicesService } from '../service/DevicesService'
import { MeasurementsDataService } from '../service/MeasurementsDataService';
import { MeasurementsDataModel } from '../model/MeasurementsDataModel';
import { MeasurementsDataValidator } from '../validators/MeasurementsDataValidator'

class MeasurementsDataController implements ControllerBaseInteface {

    public path = '/messdata'
    public router = express.Router()

    constructor() {
        try {
            this.initRouters();
        } catch (error) {
            console.error(error)
        }
    }

    initRouters() {
        try {
            this.router.post(this.path, this.saveMeasurementsData);
        } catch (error) {
            console.error(error)
        }
    }


    private async saveMeasurementsData(req: Request, res: Response): Promise<any> {
        try {
            const deviceService = new DevicesService()
            const device = await deviceService.getByApiToken(req.header('apiToken'));
            if (!device) {
                return res.status(401).json({ 'error': true, 'message': 'Device not found' })
            }

            const validator = new MeasurementsDataValidator();
            const valid = await validator.validate(req.body);
            if (typeof valid !== 'boolean') {
                return res.status(401).json(valid)
            }

            const measurementsDataService = new MeasurementsDataService();
            const measurementsData = await measurementsDataService.createMeasurementsData(req.body, device);
            const measurementsDataModel = new MeasurementsDataModel(measurementsData);
            return res.status(200).json(measurementsDataModel);

        } catch (error) {
            console.error(error)
        }
    }
}

export default MeasurementsDataController;