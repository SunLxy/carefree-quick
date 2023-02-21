import axios from 'axios';
import { AnswerItemType, ListItemType, PageType, ReturnType, ListReturn, QuestionParamsType } from '../interface';

const request = async <T, K>(url: string, params: T) => {
  return axios.post<K>(url, params, { responseType: 'json' }).then((response) => response.data);
};

/**查询题目*/
export const getQuestionList = async (params: PageType) => {
  return request<PageType, ReturnType<ListReturn>>('/api/question/list', params);
};

/**创建题目*/
export const createQuestion = async (params: ListItemType) => {
  return request<ListItemType, ReturnType>('/api/question/create', params);
};

/**查询题目详情*/
export const getQuestionInfo = async (params: QuestionParamsType) => {
  return request<QuestionParamsType, ReturnType<ListItemType>>('/api/question/info', params);
};

/**查询题目答案*/
export const getAnswerList = async (params: QuestionParamsType) => {
  return request<QuestionParamsType, ReturnType<AnswerItemType[]>>('/api/answer/list', params);
};

/**创建题目答案*/
export const createAnswer = async (params: AnswerItemType) => {
  return request<AnswerItemType, ReturnType>('/api/answer/create', params);
};
