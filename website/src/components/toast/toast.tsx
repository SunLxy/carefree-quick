import { SuccessIcon, InfoIcon, ErrorIcon, WarnIcon } from '../toast/icons';
import { ToastIconBase, ToastBase, ToastContentBase } from './styles';

const Icons = {
  success: <SuccessIcon />,
  info: <InfoIcon />,
  error: <ErrorIcon />,
  warn: <WarnIcon />,
};

export interface TipsProps {
  children: React.ReactNode;
  type: 'success' | 'info' | 'error' | 'warn';
  prefixCls?: string;
}

export const Toasts = (props: TipsProps) => {
  const { children, type, prefixCls = 'c-toast' } = props;
  return (
    <ToastBase className={`${prefixCls}-body ${prefixCls}-body-${type}`}>
      <ToastIconBase onlyIcon={!children} className={`${prefixCls}-icon ${prefixCls}-icon-${!!children}`}>
        {Icons[type]}
      </ToastIconBase>
      <ToastContentBase className={`${prefixCls}-content`}>{children}</ToastContentBase>
    </ToastBase>
  );
};
