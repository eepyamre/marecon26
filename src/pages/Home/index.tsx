import { applyForPanels, applyForVendors } from '@/state';

import { Note, Page } from '@/components';

import css from './style.module.scss';

export const Home = () => {
  return (
    <Page>
      <h1 class={css.title}>Marecon 2026</h1>
      <div class={css.stamp}>
        <h3>Date</h3>
        <span>XX.XX.2026</span>
      </div>
      <div className={css.content}>
        <div className={css.note}>(Please handle with care)</div>
        <div class={css.list}>
          {applyForPanels.value && (
            <Note className={css.panelsNote}>
              Panel submissions are now OPEN! <a href="#">Apply for panels</a>
            </Note>
          )}
          {applyForVendors.value && (
            <Note className={css.vendorsNote}>
              Want to be a vendor? <a href="#">Apply Here!</a>
            </Note>
          )}
        </div>
      </div>
    </Page>
  );
};
