import { useParams } from 'react-router-dom';
import { AnswerItemType, ListItemType } from '../interface';
import { getAnswerList, getQuestionInfo, createQuestion, createAnswer } from '@/services';
import { useState } from 'react';

export const useQuestion = () => {
  const params = useParams<{ id: string }>();
  const [loading, setLoading] = useState<boolean>(false);
  const [loading2, setLoading2] = useState<boolean>(false);
  const [info, setInfo] = useState<Partial<ListItemType>>({});
  const [answer, setAnswer] = useState<Partial<AnswerItemType>>({});
  const [answerList, setAnswerList] = useState<AnswerItemType[]>([]);

  /**创建答案**/
  const createAnswers = async () => {
    try {
      if (!answer.content) {
        // 答案内容未填写
        return;
      }
      if (info.id && answer.content) {
        setLoading(true);
        const result = await createAnswer({ content: answer.content, id: info.id });
        setLoading(false);
        if (result.code === 1) {
          // 创建成功
        }
      }
    } catch (err) {
      setLoading(false);
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
      if (info.type && answer.content && info.title) {
        setLoading(true);
        const result = await createQuestion({ title: info.title, content: info.content, type: info.type });
        setLoading(false);
        if (result.code === 1) {
          // 创建成功
        }
      }
    } catch (err) {
      setLoading(false);
    }
  };

  /**获取答案*/
  const getAnswer = async () => {
    try {
      if (params.id) {
        setLoading(true);
        const result = await getAnswerList({ id: params.id });
        setLoading(false);
        if (result.code === 1) {
          setAnswerList(result.data || []);
        }
      }
    } catch (err) {
      setLoading(false);
    }
  };

  /**获取题目详情**/
  const getInfo = async () => {
    try {
      if (params.id) {
        setLoading2(true);
        const result = await getQuestionInfo({ id: params.id });
        setLoading2(false);
        if (result.code === 1) {
          setInfo(result.data || {});
        }
      }
    } catch (err) {
      setLoading2(false);
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
    loading,
    loading2,
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
