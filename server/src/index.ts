import * as express from 'express';
import * as bodyParser from 'body-parser';
import { Request, Response } from 'express';
import { AppDataSource } from './data-source';
import { Routes } from './routes';

export const startServer = (PROT = 8063): Promise<true | Error> => {
  return new Promise((resolve, reject) => {
    AppDataSource.initialize()
      .then(async () => {
        try {
          // create express app
          const app = express();
          app.use(bodyParser.json());
          // register express routes from defined application routes
          Routes.forEach((route) => {
            app[route.method](route.route, (req: Request, res: Response, next: express.NextFunction) => {
              const result = new route.controller()[route.action](req, res, next);
              if (result instanceof Promise) {
                result.then((result) => (result !== null && result !== undefined ? res.send(result) : undefined));
              } else if (result !== null && result !== undefined) {
                res.json(result);
              }
            });
          });
          app.listen(PROT, () => {
            resolve(true);
            console.log(`Express server has started on port ${PROT}. Open http://localhost:${PROT} to see results`);
          });
        } catch (err) {
          reject(err);
        }
      })
      .catch((error) => {
        reject(error);
        console.log(error);
      });
  });
};
