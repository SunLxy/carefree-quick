import { useMemo } from 'react';
import styled from 'styled-components';
import ListItem from './item';
import { ListItemType } from '../../interface';

const ListWarp = styled.div``;

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
  return <ListWarp>{render}</ListWarp>;
};

export default List;
