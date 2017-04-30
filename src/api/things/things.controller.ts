import {
    Request,
    Response,
    ErrorRequestHandler
} from 'express';
const config = require('../../config/config');
const path = require('path');

function respondWithResult(res: Response, statusCode?: number) {
  statusCode = statusCode || 200;
  return function(entity: any) {
    if (entity) {
      return res.status(statusCode).json(entity);
    }
    return null;
  };
}

function handleError(res: Response, statusCode?: number) {
  statusCode = statusCode || 500;
  return function(err: ErrorRequestHandler) {
    res.status(statusCode).send(err);
  };
}

function handleEntityNotFound(res: Response) {
  return function(entity: any) {
    if(!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

export function getExample(req: Request, res: Response): null {
  new Promise((resolve, reject) => {
    resolve([
     {
       name: 'Desk',
       type: 'wood'
     },
     {
       name: 'Pen',
       type: 'plastic'
     },
     {
       name: 'Laptop',
       type: 'apple'
     }
    ]);
  })
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
  return null;
}