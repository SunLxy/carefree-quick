import React from 'react';
import { Provider } from '@/hooks/store';
import styled from 'styled-components';

interface LayoutsProps {
  children: React.ReactNode;
}

const LayoutsWarp = styled.div`
  margin: auto;
  width: 1024px;
`;

const Layouts = (props: LayoutsProps) => {
  return (
    <LayoutsWarp>
      <Provider>{props.children}</Provider>
    </LayoutsWarp>
  );
};
export default Layouts;
