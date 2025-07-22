import { signal } from '@preact/signals';

import { Pages } from './types';

export const activePage = signal(Pages.HOME);
export const hqFulfillment = signal(false);

export const nextPage = () => {
  const nextPage = activePage.value + 1;
  if (nextPage <= 6) {
    activePage.value = nextPage;
  }
};

export const prevPage = () => {
  const nextPage = activePage.value - 1;
  if (nextPage >= 0) {
    activePage.value = nextPage;
  }
};

export const setPage = (page: Pages) => {
  activePage.value = page;
};

export const setHqFulfillment = (b: boolean) => {
  hqFulfillment.value = b;
};
