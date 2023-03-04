import React from 'react';
import { Provider } from '@/hooks/store';
import styled from 'styled-components';

interface LayoutsProps {
  children: React.ReactNode;
}

const LayoutsWarp = styled.div`
  margin: auto;
  max-width: 1024px;
  min-width: 350px;
  padding: 10px 20px;
`;

const Layouts = (props: LayoutsProps) => {
  return (
    <LayoutsWarp>
      <Provider>{props.children}</Provider>
    </LayoutsWarp>
  );
};
export default Layouts;
