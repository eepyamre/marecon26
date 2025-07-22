import cn from 'classnames';
import { FC, PropsWithChildren } from 'preact/compat';

import css from './styles.module.scss';

type Props = PropsWithChildren & {
  className?: string;
};

export const Note: FC<Props> = ({ children, className, ...props }) => {
  return (
    <div class={cn(css.wrapper, className)} {...props}>
      {children}
    </div>
  );
};
