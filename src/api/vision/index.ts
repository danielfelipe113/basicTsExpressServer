import { Router } from 'express';
import Controller from './vision.controller';
const colors = require('colors/safe');

export default class {
  controller: Controller;
  router: Router;
  constructor() {
    this.controller = new Controller();
    this.router = Router();
  }

  routes() {
    this.router.get('/', this.controller.analysePhoto);
    this.router.post('/', this.controller.analysePhoto);

    return this.router;
  }
 }