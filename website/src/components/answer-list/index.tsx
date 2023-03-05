import { useMemo } from 'react';
import styled from 'styled-components';
import { AnswerItemType } from '../../interface';
import ListItem from './item';

const AnswerListWarp = styled.div``;
const EmptyBase = styled.div`
  color: #ddd;
  font-size: 18px;
  min-height: 200px;
  justify-content: center;
  align-items: center;
  display: flex;
  border: 1px solid #ddd;
  border-radius: 10px;
`;

interface AnswerListProps {
  dataList: AnswerItemType[];
}

const AnswerList = (props: AnswerListProps) => {
  const { dataList = [] } = props;

  const render = useMemo(() => {
    return dataList.map((item, key) => {
      return <ListItem key={key} rowItem={item} />;
    });
  }, [dataList]);
  if (dataList.length === 0) {
    return <EmptyBase>无数据</EmptyBase>;
  }
  return <AnswerListWarp>{render}</AnswerListWarp>;
};
export default AnswerList;
