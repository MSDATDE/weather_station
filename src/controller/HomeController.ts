import express from 'express'
import { Request, Response } from 'express'
import ControllerBaseInteface from '../interfaces/ControllerBaseInterface'


class HomeController implements ControllerBaseInteface {

    public path = '/'
    public router = express.Router()

    constructor() {
        this.initRouters();
    }

    public async initRouters(): Promise<any> {
        try {
            this.router.get(this.path, this.index);
        } catch (error) {
            console.error(error)
        }
    }

    private async index(req: Request, res: Response): Promise<any> {
        try {
            const greating = {
                'Application': 'Weather Station DB App',
                'Vesrsion': '1.0.0',
                'Creator': 'Sebastian Majchrzak <smajchrzak@msdat.de>'
            }

            res.json(greating);
        } catch (error) {
            console.error(error)
        }
    }
}

export default HomeController
