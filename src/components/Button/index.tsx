import cn from 'classnames';
import { FC, MouseEventHandler, PropsWithChildren } from 'preact/compat';

import css from './styles.module.scss';

type Props = PropsWithChildren & {
  href?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  className?: string;
};

export const Button: FC<Props> = ({ children, className, ...props }) => {
  return (
    <a class={cn(css.wrapper, className)} {...props}>
      {children}
    </a>
  );
};
