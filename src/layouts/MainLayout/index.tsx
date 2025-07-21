import { Home } from '@/pages/Home';
import { Mascots } from '@/pages/Mascots';

import { Navigation, Notebook } from '@/components';

import logo from '@/assets/logo.png';

import css from './styles.module.scss';

export const MainLayout = () => {
  return (
    <>
      <Navigation />
      <img src={logo} alt="Logo" class={css.logo} />
      <Notebook>
        <div class={css.pages}>
          <Home />
          <Mascots />
        </div>
      </Notebook>
    </>
  );
};
