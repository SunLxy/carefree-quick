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
  const { store, getList } = useStore();
  const navigate = useNavigate();

  const onChange = (page: number, pageSize: number) => {
    getList({ page, pageSize });
  };

  const onSearch = (item: { keyword: string; type: string }) => {
    throttle(() => getList({ ...item, page: 1 }));
  };

  const onClick = (rowItem: ListItemType) => {
    navigate(`/question/${rowItem.id}`);
  };

  const onCreate = () => {
    navigate(`/question/create`);
  };

  return (
    <IndexWarp>
      <Position top="20px" right="40px">
        <EditButton onClick={onCreate}>新增</EditButton>
      </Position>
      <Search onSearch={onSearch} />
      <List dataList={store.dataList} onClick={onClick} />
      <Position bottom="20px" right="15px">
        <Pagination page={store.page} pageSize={store.pageSize} total={store.total} onChange={onChange} />
      </Position>
    </IndexWarp>
  );
};

export default Index;
