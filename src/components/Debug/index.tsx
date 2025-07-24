import {
  applyForHq,
  applyForPanels,
  applyForVendors,
  hqFulfillment,
  setApplyForHq,
  setApplyForPanels,
  setApplyForVendors,
  setHqFulfillment,
} from '@/state';

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

      <div
        class={css.item}
        onClick={() => setApplyForPanels(!applyForPanels.value)}
      >
        <span>Show Apply For Panels Note:</span>
        <span>{String(applyForPanels.value)}</span>
      </div>

      <div
        class={css.item}
        onClick={() => setApplyForVendors(!applyForVendors.value)}
      >
        <span>Show Apply For Vendors Note:</span>
        <span>{String(applyForVendors.value)}</span>
      </div>

      <div class={css.item} onClick={() => setApplyForHq(!applyForHq.value)}>
        <span>Show Apply For HQ button:</span>
        <span>{String(applyForHq.value)}</span>
      </div>
    </div>
  );
};
