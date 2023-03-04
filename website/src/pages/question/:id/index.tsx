import { useParams, useNavigate } from 'react-router-dom';
import { useQuestion } from '@/hooks/useQuestion';
import { useMemo } from 'react';
const Index = () => {
  const { getInfo, getAnswer, answerList, info } = useQuestion();
  const params = useParams();
  const navigate = useNavigate();
  console.log('params', params);
  useMemo(() => {
    getInfo();
    getAnswer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onBack = () => navigate(-1);

  return (
    <div>
      <button onClick={onBack}>返回</button>
      <p>question info</p>
      <p>{JSON.stringify(params)}</p>
      <p>详情：{JSON.stringify(info)}</p>
      <p>答案：{JSON.stringify(answerList)}</p>
    </div>
  );
};
export default Index;
