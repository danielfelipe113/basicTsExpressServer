import { Router } from 'express';
import * as controller from './things.controller';
const colors = require('colors/safe');

export default class {
  router: Router;
  constructor() {
    this.router = Router();
  }

  routes() {
    this.router.get('/', controller.getExample);

    return this.router;
  }
 }