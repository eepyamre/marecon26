import { signal } from '@preact/signals';

export const hqFulfillment = signal(false);
export const applyForHq = signal(false);
export const applyForPanels = signal(false);
export const applyForVendors = signal(false);

export const setApplyForHq = (b: boolean) => {
  applyForHq.value = b;
};

export const setHqFulfillment = (b: boolean) => {
  hqFulfillment.value = b;
};

export const setApplyForPanels = (b: boolean) => {
  applyForPanels.value = b;
};

export const setApplyForVendors = (b: boolean) => {
  applyForVendors.value = b;
};
