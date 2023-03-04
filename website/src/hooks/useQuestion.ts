import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AnswerItemType, ListItemType } from '../interface';
import { getAnswerList, getQuestionInfo, createQuestion, createAnswer } from '@/services';
import { useStore } from './store';
export interface Store {
  /**答案列表数据*/
  dataList: AnswerItemType[];
  /**当前页*/
  page: number;
  /**每页数*/
  pageSize: number;
  /**总数*/
  total: number;
  loading?: boolean;
  loading2?: boolean;
  info: Partial<ListItemType>;
  answer: Partial<AnswerItemType>;
}

const InitalStore: Store = {
  dataList: [],
  pageSize: 20,
  page: 1,
  total: 0,
  info: {},
  answer: {},
};

export const reducer = (store: Store, action: Partial<Store>) => {
  return {
    ...store,
    ...action,
  };
};

export const useQuestion = () => {
  const params = useParams<{ id: string }>();
  const navigate = useNavigate();
  const {
    store: { pageSize },
    getList,
  } = useStore();

  const [store, dispatch] = React.useReducer(reducer, { ...InitalStore });
  const { answer, info } = store;
  const onBack = () => navigate(-1);

  /**获取答案*/
  const getAnswer = async (page: number, pageSize: number) => {
    try {
      if (params.id) {
        dispatch({ loading: true, page, pageSize });
        const result = await getAnswerList({ id: params.id, page, pageSize });
        dispatch({ loading: false });
        if (result.code === 1) {
          dispatch({
            dataList: result.data.rows || [],
            total: result.data.total || 0,
          });
        }
      }
    } catch (err) {
      dispatch({ loading: false });
    }
  };

  /**获取题目详情**/
  const getInfo = async () => {
    try {
      if (params.id) {
        dispatch({ loading2: true });
        const result = await getQuestionInfo({ id: params.id });
        dispatch({ loading2: false });
        if (result.code === 1) {
          dispatch({ info: result.data || {} });
        }
      }
    } catch (err) {
      dispatch({ loading2: false });
    }
  };

  /**创建答案**/
  const createAnswers = async () => {
    try {
      if (!answer.content) {
        // 答案内容未填写
        return;
      }
      if (info.id && answer.content) {
        dispatch({ loading: true });
        const result = await createAnswer({ content: answer.content, id: info.id });
        dispatch({ loading: false });
        if (result.code === 1) {
          // 创建成功
          dispatch({ answer: { content: '' } });
          getAnswer(1, store.pageSize);
        }
      }
    } catch (err) {
      dispatch({ loading: false });
    }
  };

  /**创建题目**/
  const createQuestions = async () => {
    try {
      if (!info.title) {
        // 标题未填写
        return;
      }
      if (!info.content) {
        // 内容未填写
        return;
      }
      if (!info.type) {
        // 类型未填写
        return;
      }
      if (info.type && info.content && info.title) {
        dispatch({ loading: true });
        const result = await createQuestion({ title: info.title, content: info.content, type: info.type });
        dispatch({ loading: false });
        // 创建成功
        if (result.code === 1) {
          dispatch({ info: { type: 'javascript' } });
          getList({ page: 1, pageSize });
          onBack();
        }
      }
    } catch (err) {
      dispatch({ loading: false });
    }
  };
  /**创建题目更新值**/
  const onQuestionChange = (value: Partial<ListItemType>) => {
    dispatch({ info: { ...store.info, ...value } });
  };

  /**创建答案更新值**/
  const onAnswerChange = (value: Partial<ListItemType>) => {
    dispatch({ answer: { ...store.answer, ...value } });
  };

  return {
    ...store,
    onBack,
    createAnswers,
    createQuestions,
    getAnswer,
    getInfo,
    onQuestionChange,
    onAnswerChange,
  };
};
