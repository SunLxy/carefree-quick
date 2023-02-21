import styled from 'styled-components';
import List from '@/components/list';
import { useStore } from '@/hooks/store';
import Pagination from '@/components/pagination';
import Search from '@/components/search';
import { throttle } from '@/utils';

const IndexWarp = styled.div``;

const Index = () => {
  const { store, getList } = useStore();

  const onChange = (page: number, pageSize: number) => {
    getList({ page, pageSize });
  };

  const onSearch = (keyword: string) => {
    throttle(() => getList({ keyword, page: 1 }));
  };

  return (
    <IndexWarp>
      <Search onChange={onSearch} />
      <List dataList={store.dataList} />
      <Pagination page={store.page} pageSize={store.pageSize} total={store.total} onChange={onChange} />
    </IndexWarp>
  );
};

export default Index;
