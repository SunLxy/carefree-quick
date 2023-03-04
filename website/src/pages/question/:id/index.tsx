import styled from 'styled-components';
import { useQuestion } from '@/hooks/useQuestion';
import { useMemo } from 'react';
import Loading from '@/components/Loading';
import AnswerList from '@/components/answer-list';
import Pagination from '@/components/pagination';
import Button from '@/components/button';
import Position from '@/components/position';

const PostionBody = styled.div`
  top: 10px;
  position: sticky;
  background-color: #fff;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: 600;
  border-bottom: 1px solid #ccc;
  padding: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Content = styled.div`
  padding: 5px 0;
  font-size: 14px;
  text-indent: 2em;
`;

const Footer = styled.div`
  text-align: right;
  padding: 5px 0;
  font-size: 12px;
  color: #ccc;
`;
const InfoBody = styled.div``;

const ReplyTextArea = styled.textarea`
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
  font-size: 16px;
  padding: 10px;
  min-width: 100%;
  max-width: 100%;
  color: #aaa;
  min-height: 50px;
  ::placeholder {
    color: #ccc;
    font-size: 14px;
  }
  :active,
  :focus {
    outline: none;
    border-color: #87d068;
  }
`;

const ViewTitle = styled.div`
  font-weight: 600;
  color: #aaa;
  box-shadow: 0 5px 5px -5px #ccc;
  padding: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Index = () => {
  const {
    getInfo,
    getAnswer,
    info,
    loading,
    loading2,
    dataList,
    page,
    pageSize,
    total,
    onChangePage,
    onBack,
    onAnswerChange,
    answer,
    createAnswers,
  } = useQuestion();
  useMemo(() => {
    getInfo();
    getAnswer(1, 20);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Loading loading={loading || loading2}>
        <PostionBody>
          <InfoBody>
            <Title>
              {info.title}{' '}
              <Button size="sm" onClick={onBack}>
                返回
              </Button>
            </Title>
            <Content>{info.content}</Content>
            <Footer>创建时间：{info.createTime}</Footer>
          </InfoBody>
          <ReplyTextArea
            value={answer.content}
            onChange={(event) => onAnswerChange({ content: event.target.value })}
            placeholder="请输入自己的理解"
            rows={5}
          />
          <ViewTitle>
            <span>见解：</span>
            <Button size="sm" onClick={createAnswers}>
              提交
            </Button>
          </ViewTitle>
        </PostionBody>
        <AnswerList dataList={dataList} />
        <Position bottom="20px" right="15px">
          <Pagination page={page} pageSize={pageSize} total={total} onChange={onChangePage} />
        </Position>
      </Loading>
    </div>
  );
};
export default Index;
