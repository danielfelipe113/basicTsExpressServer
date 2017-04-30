const path = require('path');

module.exports = {
  port: process.env.PORT || 3000,
  rootPath: path.normalize(`${__dirname}/../`)
};

