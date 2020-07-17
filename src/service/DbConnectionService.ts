import { createConnection } from 'typeorm';
import config from 'config';

const dbHost: string = config.get('database.host');
const dbPort: any = config.get('database.port');
const dbUsername: string = config.get('database.username');
const dbPassword: string = config.get('database.password');
const dbDatabase: string = config.get('database.database');
const dbsynchronize: any = config.get('database.synchronize');

export const connection = createConnection({
    type: "mysql",
    host: process.env.HOSTNAME || dbHost,
    port: process.env.DB_PORT || dbPort,
    username: process.env.DB_USERNAME || dbUsername,
    password: process.env.DB_PASSWORD || dbPassword,
    database: process.env.DB_DATABASE || dbDatabase,
    entities: [__dirname + '/../entity/*.{js,ts}'],
    synchronize: process.env.TYPEORM_SYNC || dbsynchronize,
}).then(connection => {
    console.log("DB connected");
}).catch(error => console.error(error));
