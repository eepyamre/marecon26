import cn from 'classnames';
import { FC, PropsWithChildren } from 'preact/compat';

import css from './styles.module.scss';

type Props = PropsWithChildren & {
  src: string;
  className?: string;
};

export const Photo: FC<Props> = ({ children, src, className }) => {
  return (
    <div class={cn(css.wrapper, className)}>
      <div class={css.imageWrapper}>
        <img src={src} alt="Photo" />
      </div>
      <div class={css.textWrapper}>{children}</div>
    </div>
  );
};
