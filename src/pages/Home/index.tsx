import logo from '@/assets/logo.png';
import { Bookmark, Page } from '@/components';
import { Pages } from '@/state/types';

import css from './style.module.scss';

export const Home = () => {
  return (
    <Page page={Pages.HOME}>
      <Bookmark />
      <h1 class={css.title}>Marecon 2026</h1>
      <img src={logo} alt="Logo" class={css.logo} />
      <div class={css.stamp}>
        <h3>Date</h3>
        <span>01.02.2026</span>
      </div>
      <div className={css.content}>
        <div className={css.note}>(Please handle with care)</div>
      </div>
    </Page>
  );
};
