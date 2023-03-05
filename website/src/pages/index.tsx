import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import List from '@/components/list';
import { useStore } from '@/hooks/store';
import Pagination from '@/components/pagination';
import Search from '@/components/search';
import { throttle } from '@/utils';
import { ListItemType } from '@/interface';
import Position from '@/components/position';
import Button from '@/components/button';
const IndexWarp = styled.div``;

const EditButton = styled(Button)``;

const Index = () => {
  const { store, getList, dispatch } = useStore();
  const navigate = useNavigate();

  const onChange = (page: number, pageSize: number) => {
    getList({ page, pageSize });
  };

  const onSearch = () => throttle(() => getList({ page: 1 }));

  const onClick = (rowItem: ListItemType) => {
    navigate(`/question/${rowItem.id}`);
  };

  const onCreate = () => {
    navigate(`/question/create`);
  };

  const onValuesChange = (item: { keyword?: string; type?: string }) => {
    dispatch({ ...item });
  };

  return (
    <IndexWarp>
      <Position top="20px" right="40px">
        <EditButton onClick={onCreate}>新增</EditButton>
      </Position>
      <Search item={{ keyword: store.keyword, type: store.type }} onChange={onValuesChange} onSearch={onSearch} />
      <List dataList={store.dataList} onClick={onClick} />
      <Position bottom="20px" right="15px">
        <Pagination page={store.page} pageSize={store.pageSize} total={store.total} onChange={onChange} />
      </Position>
    </IndexWarp>
  );
};

export default Index;
