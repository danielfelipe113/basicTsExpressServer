/**
 * Error responses
 */
import {
    Request,
    Response
} from 'express';

export default class Errors {
  constructor() {
  }

  pageNotFound(req: Request, res: Response): void {
    let viewFilePath = '404';
    let statusCode = 404;
    let result = {
      status: statusCode
    };

    res.status(result.status);
    res.render(viewFilePath, {}, (err: any, html: any) => {
      if(err) {
        return res.status(result.status).json(result);
      }
      res.send(html);
    });
  }
}

