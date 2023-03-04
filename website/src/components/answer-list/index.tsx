import { useMemo } from 'react';
import styled from 'styled-components';
import { AnswerItemType } from '../../interface';
import ListItem from './item';

const AnswerListWarp = styled.div``;

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

  return <AnswerListWarp>{render}</AnswerListWarp>;
};
export default AnswerList;
