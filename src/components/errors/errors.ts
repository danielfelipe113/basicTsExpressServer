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
    res.status(404);
    res.render('404', {}, (err: any, html: any) => {
      if (err) {
        return res.status(404).json({status: 404});
      }
      res.send(html);
    });
  }
}

