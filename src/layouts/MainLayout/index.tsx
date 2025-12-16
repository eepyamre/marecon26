import { routes } from '@/index';
import { NotFound } from '@/pages';
import { Route, Router } from 'preact-iso';

import { Navigation, Notebook } from '@/components';

import logo from '@/assets/logo1.webp';

import css from './styles.module.scss';

export const MainLayout = () => {
  return (
    <main>
      <Navigation />
      <img src={logo} alt="Logo" class={css.logo} />
      <Notebook>
        <div class={css.pages}>
          <Router>
            {Object.entries(routes).map(([key, value]) => (
              <Route key={key} path={key} component={value} />
            ))}

            <Route default component={NotFound} />
          </Router>
        </div>
      </Notebook>
    </main>
  );
};
