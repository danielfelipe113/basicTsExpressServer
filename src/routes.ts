
import Errors from './components/errors/errors';
import path = require('path');
import {
    Express,
    Request,
    Response,
    NextFunction
} from 'express';

import ThingsApi from './api/things/index';

export default class {
  errors: Errors;
  thingsApi: ThingsApi;
  constructor(private app: any) {
    this.errors = new Errors();
    this.thingsApi = new ThingsApi();
  }

  routes() {
    // Enable CORS
    this.app.use((req: Request, res: Response, next: NextFunction) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Headers, Authorization, X-Requested-With');
      res.header('Access-Control-Max-Age', '3600');
      res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
      next();
    });

    // Insert routes below
    this.app.use('/api/things', this.thingsApi.routes());

    // All undefined asset or api routes should return a 404
    this.app.route('/:url(api|auth|components|app|bower_components|assets)/*')
      .get(this.errors['pageNotFound']);

    // All other routes should redirect to the index.html
    this.app.route('/*')
      .get((req: Request, res: Response) => {
        res.status(200).send('Server running ...');
      });
  }
}
