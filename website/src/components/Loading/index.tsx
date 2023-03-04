import React, { PropsWithoutRef, forwardRef } from 'react';
import styled, { css } from 'styled-components';
const Load = styled.div<{ loading?: string }>`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.3);
  transition: all 1000;
  z-index: 9999;
  ${(props) => {
    if (props.loading === 'true') {
      return css`
        display: flex;
      `;
    }
    return css`
      display: none;
    `;
  }}
`;

interface LoadingProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  loading?: boolean;
  tip?: React.ReactNode;
}

const Loading = forwardRef<HTMLDivElement, PropsWithoutRef<LoadingProps>>((props, ref) => {
  const { tip = 'loading...', loading, children, ...rest } = props;
  return (
    <React.Fragment>
      {children}
      <Load {...rest} loading={`${loading}`} ref={ref}>
        {tip}
      </Load>
    </React.Fragment>
  );
});
export default Loading;
