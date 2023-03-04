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
          // 跨域
          app.all('*', (req: Request, res: Response, next: any) => {
            res.set({
              'Access-Control-Allow-Credentials': true, //允许后端发送cookie
              'Access-Control-Allow-Origin': req.headers.origin || '*', //任意域名都可以访问,或者基于我请求头里面的域
              'Access-Control-Allow-Headers': 'X-Requested-With,Content-Type', //设置请求头格式和类型
              'Access-Control-Allow-Methods': 'PUT,POST,GET,DELETE,OPTIONS', //允许支持的请求方式
              'Content-Type': 'application/json; charset=utf-8', //默认与允许的文本格式json和编码格式
            });
            next();
          });
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
