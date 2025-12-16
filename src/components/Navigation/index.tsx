import { THREAD_LINK } from '@/constants';

import css from './styles.module.scss';

export const Navigation = () => {
  return (
    <nav class={css.bookmarks}>
      <a href="/">Welcome</a>
      <a href="/mascots">Mascots</a>
      <a href="/hq">HQ</a>
      {/* <a href="/schedule" >
        Schedule
      </a> */}
      {/* <a href="/vendors" >
        Vendors
      </a> */}
      <a href="/faq">FAQ</a>
      <a href="/archive">Archive</a>
      <a href="//shop.marecon.live" target={'_blank'}>
        Merch
      </a>
      <a href={THREAD_LINK} target={'_blank'}>
        Thread
      </a>
    </nav>
  );
};
