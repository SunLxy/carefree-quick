import { QuestionsController } from '../controller/QuestionsController';
import { RouteItemType } from '../interface';

export const Questions: RouteItemType<typeof QuestionsController>[] = [
  {
    method: 'post',
    route: '/api/question/list',
    controller: QuestionsController,
    action: 'list',
  },
  {
    method: 'post',
    route: '/api/question/create',
    controller: QuestionsController,
    action: 'create',
  },
  {
    method: 'post',
    route: '/api/question/info',
    controller: QuestionsController,
    action: 'info',
  },
  {
    method: 'post',
    route: '/api/question/delete',
    controller: QuestionsController,
    action: 'delete',
  },
];
