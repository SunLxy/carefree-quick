import { AnswersController } from '../controller/AnswersController';
import { RouteItemType } from '../interface';

export const Answers: RouteItemType<typeof AnswersController>[] = [
  {
    method: 'post',
    route: '/api/answer/list',
    controller: AnswersController,
    action: 'list',
  },
  {
    method: 'post',
    route: '/api/answer/create',
    controller: AnswersController,
    action: 'create',
  },
  {
    method: 'post',
    route: '/api/answer/info',
    controller: AnswersController,
    action: 'info',
  },
  {
    method: 'post',
    route: '/api/answer/delete',
    controller: AnswersController,
    action: 'delete',
  },
];
