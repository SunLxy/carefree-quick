import styled from 'styled-components';
import List from '@/components/list';

const IndexWarp = styled.div``;

const Index = () => {
  return (
    <IndexWarp>
      <List dataList={[{ title: '', type: [], content: '' }]} />
    </IndexWarp>
  );
};

export default Index;
