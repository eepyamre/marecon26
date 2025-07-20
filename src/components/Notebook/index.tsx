import { setPage } from '@/state';
import { Pages } from '@/state/types';
import cn from 'classnames';
import { FC, PropsWithChildren } from 'preact/compat';

import css from './styles.module.scss';

type Props = PropsWithChildren & {};

export const Notebook: FC<Props> = ({ children }) => {
  return (
    <div class={cn(css.wrapper)}>
      <nav class={css.bookmarks}>
        <div onClick={() => setPage(Pages.HOME)}>Welcome</div>
        <div onClick={() => setPage(Pages.MASCOTS)}>Mascots</div>
        <div>HQ</div>
        <div>Schedule</div>
        <div>Vendors & Merch</div>
        <div>FAQ</div>
        <div>Archive</div>
      </nav>
      {children}
    </div>
  );
};
