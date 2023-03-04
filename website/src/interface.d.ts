/**列表数据每一项值*/
export interface ListItemType {
  id?: string;
  /**标题*/
  title: string;
  /**类型*/
  type: string;
  /**创建时间*/
  createTime?: string;
  /**问题说明**/
  content: string;
}

export interface AnswerItemType {
  /**答案**/
  content: string;
  /**创建时间*/
  createTime?: string;
  /**问题id*/
  id: string;
}

export interface PageType {
  /**当前页*/
  page: number;
  /**每页个数*/
  pageSize: number;
  /**题目类型**/
  type?: string;
}

export interface ReturnType<T = any> {
  code: number;
  data: T;
  message: string;
}

export interface ListReturn<T = any> {
  rows: T[];
  total: number;
}

export interface QuestionParamsType {
  id: string;
  /**当前页*/
  page?: number;
  /**每页个数*/
  pageSize?: number;
}
