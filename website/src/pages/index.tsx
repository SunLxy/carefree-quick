import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import List from '@/components/list';
import { useStore } from '@/hooks/store';
import Pagination from '@/components/pagination';
import Search from '@/components/search';
import { throttle } from '@/utils';
import { ListItemType } from '@/interface';

const IndexWarp = styled.div``;

const Index = () => {
  const { store, getList } = useStore();
  const navigate = useNavigate();

  const onChange = (page: number, pageSize: number) => {
    getList({ page, pageSize });
  };

  const onSearch = (keyword: string) => {
    throttle(() => getList({ keyword, page: 1 }));
  };

  const onClick = (rowItem: ListItemType) => {
    navigate(`/question/${rowItem.id}`);
  };

  return (
    <IndexWarp>
      <Search onChange={onSearch} />
      <List dataList={store.dataList} onClick={onClick} />
      <Pagination page={store.page} pageSize={store.pageSize} total={store.total} onChange={onChange} />
    </IndexWarp>
  );
};

export default Index;
