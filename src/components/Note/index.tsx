import cn from 'classnames';
import { FC, PropsWithChildren } from 'preact/compat';

import css from './styles.module.scss';

type Props = PropsWithChildren & {
  className?: string;
  tape?: boolean;
};

export const Note: FC<Props> = ({ children, className, tape, ...props }) => {
  return (
    <div class={cn(css.wrapper, className, { [css.tape]: tape })} {...props}>
      {children}
    </div>
  );
};
