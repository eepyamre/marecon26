import cn from 'classnames';
import { FC, PropsWithChildren } from 'preact/compat';

import css from './styles.module.scss';

type Props = PropsWithChildren & {};

export const Notebook: FC<Props> = ({ children }) => {
  return <div class={cn(css.wrapper)}>{children}</div>;
};
