import {
    Request,
    Response,
    ErrorRequestHandler
} from 'express';

const path = require('path');
const Vision = require('@google-cloud/vision');
const colors = require('colors/safe');
const config = require('../../config/config');

export default class Controller {
  vision: Object;
  constructor() {
  }

  private respondWithResult(res: Response, statusCode: number): Function {
    statusCode = statusCode || 200;
    return function(entity: any) {
      if (entity) {
        return res.status(statusCode).json(entity);
      }
      return null;
    };
  }

  private handleError(res: Response, statusCode: number): Function {
    statusCode = statusCode || 500;
    return function(err: ErrorRequestHandler) {
      res.status(statusCode).send(err);
    };
  }

  analysePhoto(req: Request, res: Response): null {
    console.log(colors.green('hello from api'));
    // Your Google Cloud Platform project ID
    const projectId = 'cloudapis-166021';

    // Instantiates a client
    const visionClient = Vision({
      projectId: projectId,
      keyFilename: path.normalize(`${config.rootPath}/config/CloudAPIS-748e768a7c4b.json`)
    });

    // The name of the image file to annotate
    const fileName = path.normalize(`${config.rootPath}/assets/demo-image.jpg`);
    let data;
    // Performs label detection on the image file
    visionClient.detectLabels(fileName)
      .then((results: any) => {
        const labels = results[0];
        data = results;
        console.log('Labels:');
        labels.forEach((label: any) => console.log(label));
      })
      .catch((err: any) => {
        console.error('ERROR:', err);
      });

    res.status(200).send(data);
    return null;
  }
}
