import React from 'react';
import styled from 'styled-components';
import { useStore } from '@/hooks/store';

import Loading from '@/components/Loading';
interface LayoutsProps {
  children: React.ReactNode;
}

const LayoutsWarp = styled.div`
  margin: auto;
  max-width: 1024px;
  min-width: 350px;
  padding: 0px 20px 30px 20px;
`;

const Layouts = (props: LayoutsProps) => {
  const { store } = useStore();
  return (
    <LayoutsWarp>
      <Loading loading={!!store.loading}>{props.children}</Loading>
    </LayoutsWarp>
  );
};
export default Layouts;
