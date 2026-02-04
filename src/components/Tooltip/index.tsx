import { closeTooltip } from '@/pages';
import { PropsWithChildren, forwardRef } from 'preact/compat';

import css from './style.module.scss';

export const Tooltip = forwardRef<HTMLDivElement, PropsWithChildren>(
  ({ children }, ref) => {
    return (
      <div class={css.tooltip} ref={ref}>
        <button class={css.closeButton} onClick={() => closeTooltip()}>
          ×
        </button>
        <span>{children}</span>
      </div>
    );
  },
);
