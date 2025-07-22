import { hqFulfillment, setHqFulfillment } from '@/state';

import css from './styles.module.scss';

export const Debug = () => {
  return (
    <div class={css.wrapper}>
      <div
        class={css.item}
        onClick={() => setHqFulfillment(!hqFulfillment.value)}
      >
        <span>HQ Fulfillment:</span>
        <span>{String(hqFulfillment.value)}</span>
      </div>
    </div>
  );
};
