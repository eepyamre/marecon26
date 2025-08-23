import cn from 'classnames';
import { FC, PropsWithChildren } from 'preact/compat';

import css from './styles.module.scss';

type Props = PropsWithChildren & {
  stain?: boolean;
  burn?: boolean;
  className?: string;
};

export const Page: FC<Props> = ({ children, stain, burn, className }) => {
  return (
    <div class={cn(css.page, { [css.burn]: burn }, className)}>
      {stain && <div class={css.coffie} />}
      {children}
    </div>
  );
};
