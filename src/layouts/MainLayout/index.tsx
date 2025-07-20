import { Notebook } from '@/components';
import { Home } from '@/pages/Home';
import { Mascots } from '@/pages/Mascots';

import css from './styles.module.scss';

export const MainLayout = () => {
  return (
    <Notebook>
      <div class={css.pages}>
        <Home />
        <Mascots />
      </div>
    </Notebook>
  );
};
