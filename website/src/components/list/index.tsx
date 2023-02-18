import { useMemo } from 'react';
import styled from 'styled-components';
import ListItem from './item';
import { ListItemType } from '../../interface';

const ListWarp = styled.div``;

export interface ListProps {
  dataList: ListItemType[];
}

const List = (props: ListProps) => {
  const { dataList } = props;
  const render = useMemo(() => {
    return dataList.map((item, index) => {
      return <ListItem key={index} rowItem={item} />;
    });
  }, [dataList]);
  return <ListWarp>{render}</ListWarp>;
};

export default List;
