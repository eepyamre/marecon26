import cn from 'classnames';
import { FC, PropsWithChildren } from 'preact/compat';

import { Pages } from '@/state/types';

import { activePage } from '@/state';

import css from './styles.module.scss';

type Props = PropsWithChildren & {
  page: Pages;
};

export const Page: FC<Props> = ({ children, page }) => {
  return (
    <div
      class={cn(css.page, {
        [css.active]: activePage.value === page,
        [css.pageExit]: activePage.value > page,
      })}
    >
      {children}
    </div>
  );
};
