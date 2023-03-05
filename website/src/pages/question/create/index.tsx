import styled from 'styled-components';
import React, { useEffect } from 'react';
import Loading from '@/components/Loading';
import Select from '@/components/select';
import Button from '@/components/button';
import TextArea from '@/components/textArea';
import Input from '@/components/input';
import { dictType } from '@/utils/dict';
import { useQuestion } from '@/hooks/useQuestion';

const Warp = styled.div`
  padding-top: 30px;
`;
const Title = styled.div`
  font-size: 14px;
  font-weight: 600;
  padding: 3px 0;
  min-height: 35px;
`;
const LayoutBase = styled.div``;
interface LayoutProps {
  title?: React.ReactNode;
  children?: React.ReactNode;
}
const Layout = (props: LayoutProps) => {
  const { title, children } = props;
  return (
    <LayoutBase>
      <Title>{title}</Title>
      {children}
    </LayoutBase>
  );
};

const PageTitle = styled.div`
  position: relative;
  span {
    display: block;
    text-align: center;
    font-size: 18px;
    font-weight: 600;
  }
  button {
    position: absolute;
    left: 0;
  }
`;
const Index = () => {
  const { onBack, onQuestionChange, info, createQuestions, loading } = useQuestion();
  const onValuesChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
    field: string,
  ) => {
    const value = event.target.value;
    onQuestionChange({ [field]: value });
  };

  useEffect(() => {
    onQuestionChange({ type: 'javascript' });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Warp>
      <Loading loading={loading}>
        <PageTitle>
          <Button size="sm" onClick={onBack}>
            返回
          </Button>
          <span>新增题目</span>
        </PageTitle>
        <Layout title="标题：">
          <Input
            value={info.title || ''}
            onChange={(event) => onValuesChange(event, 'title')}
            placeholder="请输入标题"
          />
        </Layout>
        <Layout title="类型：">
          <Select
            onChange={(event) => onValuesChange(event, 'type')}
            isAll={false}
            value={info.type}
            placeholder="请选择"
            options={dictType}
          />
        </Layout>
        <Layout title="内容：">
          <TextArea
            onChange={(event) => onValuesChange(event, 'content')}
            value={info.content}
            placeholder="请输入内容"
          />
        </Layout>
        <div style={{ textAlign: 'right' }}>
          <Button onClick={createQuestions}>提交</Button>
        </div>
      </Loading>
    </Warp>
  );
};
export default Index;
