import config from 'config';
import App from './App';
import bodyParser from 'body-parser';
import loggerMiddleware from './middleware/loggerMiddleware';
import { pagination } from './middleware/paginationMiddleware';
import HomeController from './controller/HomeController';
import DeviceController from './controller/DeviceController';
import MeasurementsDataController from './controller/MeasurementsDataController'


const port = parseInt(process.env.PORT || config.get('server.port'));
const app = new App({
    port: port,
    middleWares: [
        bodyParser.json(),
        bodyParser.urlencoded({ extended: true }),
        loggerMiddleware,
        pagination
    ],
    controllers: [
        new HomeController(),
        new DeviceController(),
        new MeasurementsDataController()
    ]
});

app.listen();