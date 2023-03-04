import React from 'react';
import styled, { css } from 'styled-components';
import { useStore } from '@/hooks/store';

interface LayoutsProps {
  children: React.ReactNode;
}

const LayoutsWarp = styled.div`
  margin: auto;
  max-width: 1024px;
  min-width: 350px;
  padding: 10px 20px;
`;

const Load = styled.div<{ visible: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.3);
  transition: all 1000;
  ${(props) => {
    if (props.visible) {
      return css`
        display: flex;
      `;
    }
    return css`
      display: none;
    `;
  }}
`;

const Layouts = (props: LayoutsProps) => {
  const { store } = useStore();

  return (
    <LayoutsWarp>
      {props.children}
      <Load visible={!!store.loading}>loading...</Load>
    </LayoutsWarp>
  );
};
export default Layouts;
