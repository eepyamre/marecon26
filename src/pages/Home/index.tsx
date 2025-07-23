import { Pages } from '@/state/types';

import { Bookmark, Page } from '@/components';

import css from './style.module.scss';

export const Home = () => {
  return (
    <Page page={Pages.HOME}>
      <Bookmark />
      <h1 class={css.title}>Marecon 2026</h1>
      <div class={css.stamp}>
        <h3>Date</h3>
        <span>XX.XX.2026</span>
      </div>
      <div className={css.content}>
        <div className={css.note}>(Please handle with care)</div>
      </div>
    </Page>
  );
};
