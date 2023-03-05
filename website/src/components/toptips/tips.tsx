import { CSSProperties } from 'react';
import { SuccessIcon, InfoIcon, ErrorIcon, WarnIcon } from '../toast/icons';
import { ToptipsBase, ToptipsBaseIcon, ToptipsBaseContent } from './styles';

const sty: CSSProperties = {
  width: 16,
  height: 16,
};

const Icons = {
  success: <SuccessIcon style={sty} />,
  info: <InfoIcon style={sty} />,
  error: <ErrorIcon style={sty} />,
  warn: <WarnIcon style={sty} />,
};

export interface TipsProps {
  children: React.ReactNode;
  type: 'success' | 'info' | 'error' | 'warn';
  prefixCls?: string;
}

export const Tips = (props: TipsProps) => {
  const { children, type, prefixCls = 'c-toptips' } = props;
  return (
    <ToptipsBase type={type} className={`${prefixCls}-body ${prefixCls}-${type}`}>
      <ToptipsBaseIcon className={`${prefixCls}-icon`}>{Icons[type]}</ToptipsBaseIcon>
      <ToptipsBaseContent className={`${prefixCls}-content`}>{children}</ToptipsBaseContent>
    </ToptipsBase>
  );
};
