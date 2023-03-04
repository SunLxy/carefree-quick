import styled from 'styled-components';
import React, { PropsWithoutRef, forwardRef } from 'react';

interface StyleObject {
  left?: string;
  top?: string;
  right?: string;
  bottom?: string;
}

interface PositionProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
    StyleObject {}
const PositionBase = styled.div<PositionProps>`
  position: fixed;
  ${(props) => {
    const { left, top, right, bottom } = props;
    let cssStr = '';
    if (left) {
      cssStr += `left:${left};`;
    }
    if (top) {
      cssStr += `top:${top};`;
    }
    if (right) {
      cssStr += `right:${right};`;
    }
    if (bottom) {
      cssStr += `bottom:${bottom};`;
    }
    return cssStr;
  }}
`;

const Position = forwardRef<HTMLDivElement, PropsWithoutRef<PositionProps>>((props, ref) => {
  return <PositionBase {...props} ref={ref} />;
});
export default Position;
