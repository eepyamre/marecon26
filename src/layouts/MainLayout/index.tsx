import { HQ } from '@/pages/HQ';
import { Home } from '@/pages/Home';
import { Mascots } from '@/pages/Mascots';

import { Debug, Navigation, Notebook } from '@/components';

import logo from '@/assets/logo.png';

import css from './styles.module.scss';

export const MainLayout = () => {
  const debug = localStorage.getItem('debug') === 'probably';

  return (
    <>
      {debug && <Debug />}
      <Navigation />
      <img src={logo} alt="Logo" class={css.logo} />
      <Notebook>
        <div class={css.pages}>
          <Home />
          <Mascots />
          <HQ />
        </div>
      </Notebook>
    </>
  );
};
