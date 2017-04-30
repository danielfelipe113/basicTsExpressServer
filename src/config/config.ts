const path = require('path');

export default class Config {
  port: number;
  constructor() {
    this.port = process.env.PORT || 1337;
  }
}
