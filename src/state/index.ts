import { signal } from '@preact/signals';

export const hqFulfillment = signal(false);
export const applyForPanels = signal(false);
export const applyForVendors = signal(false);

export const setHqFulfillment = (b: boolean) => {
  hqFulfillment.value = b;
};

export const setApplyForPanels = (b: boolean) => {
  applyForPanels.value = b;
};

export const setApplyForVendors = (b: boolean) => {
  applyForVendors.value = b;
};
