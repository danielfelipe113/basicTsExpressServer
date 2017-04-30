import * as express from 'express';
import * as winston from 'winston';
import * as morgan from 'morgan';
import { json } from 'body-parser';
import {
    Express,
    Request,
    Response
} from 'express';
import Routes from './routes';
const config = require('./config/config');
/**
 * Root class of your node server.
 * Can be used for basic configurations, for instance starting up the server or registering middleware.
 */
export class Server {
    private app: Express;

    constructor() {
        this.app = express();
        new Routes(this.app).routes();
        this.app.use(json());
        this.app.set('views', `./views`);
        this.app.engine('html', require('ejs').renderFile);
        this.app.set('view engine', 'html');
        this.app.use(morgan('combined'));
        this.app.listen(config.port, () => {
            console.log(config)
            winston.log('info', '--> Server successfully started at port %d', config.port);
        });
    }
}

new Server();
