import { Pages } from '@/state/types';

import { setPage } from '@/state';

import css from './styles.module.scss';

export const Navigation = () => {
  return (
    <nav class={css.bookmarks}>
      <div onClick={() => setPage(Pages.HOME)}>Welcome</div>
      <div onClick={() => setPage(Pages.MASCOTS)}>Mascots</div>
      <div onClick={() => setPage(Pages.HQ)}>HQ</div>
      <div>Schedule</div>
      <div>Vendors & Merch</div>
      <div onClick={() => setPage(Pages.FAQ)}>FAQ</div>
      <div>Archive</div>
    </nav>
  );
};
