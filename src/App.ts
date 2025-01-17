import express from 'express'
import { Application } from 'express'
import { connection } from './service/DbConnectionService';


class App {

    public app: Application;
    public port: number;

    constructor(appInit: { port: number, middleWares: any; controllers: any }) {

        this.app = express();
        this.port = appInit.port

        this.middleWares(appInit.middleWares);
        this.routes(appInit.controllers)
    }

    private middleWares(middleWares: { forEach: (arg0: (middleWare: any) => void) => void }) {
        middleWares.forEach(middleWare => {
            this.app.use(middleWare)
        })
    }

    private routes(controllers: { forEach: (arg0: (controller: any) => void) => void }) {
        controllers.forEach(controller => {
            this.app.use('/', controller.router)
        })
    }

    public async listen() {
        await connection;
        this.app.listen(this.port, () => {
            console.log(`App listenig on the http://localhost:${this.port}`)
        })
    }


}

export default App
