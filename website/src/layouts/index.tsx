import React from 'react';
import { Provider } from '@/hooks/store';

interface LayoutsProps {
  children: React.ReactNode;
}

const Layouts = (props: LayoutsProps) => {
  return <Provider>{props.children}</Provider>;
};
export default Layouts;
