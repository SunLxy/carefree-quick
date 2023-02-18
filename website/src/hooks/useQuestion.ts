import { useParams } from 'react-router-dom';
import { QuestionItemType, ListItemType } from '../interface';

import { getAnswerList, getQuestionInfo, createQuestion, createAnswer } from '@/services';
import { useState } from 'react';

export const useQuestion = () => {
  const params = useParams<{ id: string }>();
  const [info, setInfo] = useState<Partial<ListItemType>>({});
  const [answer, setAnswer] = useState<Partial<QuestionItemType>>({});
  const [answerList, setAnswerList] = useState<QuestionItemType[]>([]);

  /**创建答案**/
  const createAnswers = async () => {
    if (!answer.content) {
      // 答案内容未填写
      return;
    }
    if (info.id && answer.content) {
      const result = await createAnswer({ content: answer.content, id: info.id });
      if (result.code === 200) {
        // 创建成功
      }
    }
  };

  /**创建题目**/
  const createQuestions = async () => {
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
    if (info.type && answer.content && info.title) {
      const result = await createQuestion({ title: info.title, content: info.content, type: info.type });
      if (result.code === 200) {
        // 创建成功
      }
    }
  };

  /**获取答案*/
  const getAnswer = async () => {
    if (params.id) {
      const result = await getAnswerList({ id: params.id });
      if (result.code === 200) {
        setAnswerList(result.data || []);
      }
    }
  };

  /**获取题目详情**/
  const getInfo = async () => {
    if (params.id) {
      const result = await getQuestionInfo({ id: params.id });
      if (result.code === 200) {
        setInfo(result.data || {});
      }
    }
  };

  /**创建题目更新值**/
  const onQuestionChange = (value: Partial<ListItemType>) => {
    setInfo((pre) => ({ ...pre, value }));
  };

  /**创建答案更新值**/
  const onAnswerChange = (value: Partial<ListItemType>) => {
    setAnswer((pre) => ({ ...pre, value }));
  };

  return {
    info,
    answer,
    answerList,
    createAnswers,
    createQuestions,
    getAnswer,
    getInfo,
    onQuestionChange,
    onAnswerChange,
  };
};
