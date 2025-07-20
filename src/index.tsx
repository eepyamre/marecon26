import { MainLayout } from '@/layouts/MainLayout';
import { NotFound } from '@/pages/_404.tsx';
import '@/style.scss';
import {
  LocationProvider,
  Route,
  Router,
  hydrate,
  prerender as ssr,
} from 'preact-iso';

import { withBase } from './utils';

export const App = () => {
  return (
    <LocationProvider>
      <main>
        <Router>
          <Route path={withBase('/')} component={MainLayout} />
          <Route default component={NotFound} />
        </Router>
      </main>
    </LocationProvider>
  );
};

if (typeof window !== 'undefined') {
  hydrate(<App />, document.getElementById('app'));
}

export async function prerender(data) {
  return await ssr(<App {...data} />);
}
