import { signal } from '@preact/signals';

export const accessoriesCollected = signal({
  clip: false,
  sweater: false,
});

export const setAccessories = (
  value: Partial<{ clip: boolean; sweater: boolean }>,
) => {
  accessoriesCollected.value = {
    ...accessoriesCollected.value,
    ...value,
  };
};
