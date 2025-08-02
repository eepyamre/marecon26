import cn from 'classnames';
import { FC, PropsWithChildren } from 'preact/compat';

import css from './styles.module.scss';

type Props = PropsWithChildren & {
  stain?: boolean;
  burn?: boolean;
};

export const Page: FC<Props> = ({ children, stain, burn }) => {
  return (
    <div class={cn(css.page, { [css.burn]: burn })}>
      {stain && <div class={css.coffie} />}
      {children}
    </div>
  );
};
