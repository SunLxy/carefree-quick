import { useMemo } from 'react';
import styled from 'styled-components';
import ListItem from './item';
import { ListItemType } from '../../interface';

const ListWarp = styled.div``;

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

export interface ListProps {
  dataList: ListItemType[];
  onClick?: (rowItem: ListItemType) => void;
}

const List = (props: ListProps) => {
  const { dataList, onClick = () => {} } = props;
  const render = useMemo(() => {
    return dataList.map((item, index) => {
      return <ListItem onClick={() => onClick(item)} key={index} rowItem={item} />;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataList]);

  if (dataList.length === 0) {
    return <EmptyBase>无数据</EmptyBase>;
  }

  return <ListWarp>{render}</ListWarp>;
};

export default List;
