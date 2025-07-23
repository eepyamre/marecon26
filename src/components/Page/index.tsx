import cn from 'classnames';
import { FC, PropsWithChildren } from 'preact/compat';

import css from './styles.module.scss';

export const Page: FC<PropsWithChildren> = ({ children }) => {
  return <div class={cn(css.page)}>{children}</div>;
};
