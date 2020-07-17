import config from 'config';
import supertest from 'supertest';
import App from '../../src/App';
import bodyParser from 'body-parser';
import loggerMiddleware from '../../src/middleware/loggerMiddleware';
import HomeController from '../../src/controller/HomeController'

describe('HomeController', () => {
    const path = '/';
    const port = parseInt(process.env.PORT || config.get('server.port'));
    const app = new App({
        port: port,
        middleWares: [
            bodyParser.json(),
            bodyParser.urlencoded({ extended: true }),
            loggerMiddleware
        ],
        controllers: [
            new HomeController()
        ]
    });
    app.listen()

    it('/ (GET)', async (done) => {

        await supertest(app.app)
            .get(path)
            .expect(200);
        done();

    });
});