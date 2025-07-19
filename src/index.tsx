import {
  LocationProvider,
  Router,
  Route,
  hydrate,
  prerender as ssr,
} from 'preact-iso';

import { Home } from '@/pages/Home';
import { NotFound } from '@/pages/_404.tsx';

import { withBase } from './utils';
import '@/style.scss';

export function App() {
  return (
    <LocationProvider>
      <main>
        <Router>
          <Route path={withBase('/')} component={Home} />
          <Route default component={NotFound} />
        </Router>
      </main>
    </LocationProvider>
  );
}

if (typeof window !== 'undefined') {
  hydrate(<App />, document.getElementById('app'));
}

export async function prerender(data) {
  return await ssr(<App {...data} />);
}
