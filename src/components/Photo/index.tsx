import cn from 'classnames';
import { FC, PropsWithChildren, useEffect, useState } from 'preact/compat';

import pleasurestr from '@/assets/hijack/pleasurestr.png';

import css from './styles.module.scss';

const GRAFFITI_CHANCE = 0.05;

type Props = PropsWithChildren & {
  src: string;
  className?: string;
  noText?: boolean;
};

export const Photo: FC<Props> = ({ children, src, className, noText }) => {
  const [showGraffiti, setShowGraffiti] = useState(false);

  useEffect(() => {
    if (Math.random() < GRAFFITI_CHANCE) {
      setShowGraffiti(true);
    }
  }, []);

  return (
    <div class={cn(css.wrapper, className, { [css.noText]: noText })}>
      <div class={css.imageWrapper}>
        <img src={src} alt="Photo" />
        {showGraffiti && <img src={pleasurestr} class={css.graffiti} />}
      </div>
      <div class={css.textWrapper}>{children}</div>
    </div>
  );
};
