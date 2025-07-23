import { routes } from '@/index';
import { NotFound } from '@/pages';
import { withBase } from '@/utils';
import { Route, Router } from 'preact-iso';

import { Debug, Navigation, Notebook } from '@/components';

import logo from '@/assets/logo.png';

import css from './styles.module.scss';

export const MainLayout = () => {
  const debug = localStorage.getItem('debug') === 'probably';

  return (
    <main>
      {debug && <Debug />}

      <Navigation />
      <img src={logo} alt="Logo" class={css.logo} />
      <Notebook>
        <div class={css.pages}>
          <Router>
            {Object.entries(routes).map(([key, value]) => (
              <Route key={key} path={withBase(key)} component={value} />
            ))}

            <Route default component={NotFound} />
          </Router>
        </div>
      </Notebook>
    </main>
  );
};
