import { MainLayout } from '@/layouts/MainLayout';
import '@/style.scss';
import {
  LocationProvider,
  Route,
  Router,
  hydrate,
  prerender as ssr,
} from 'preact-iso';

import { Archive, FAQ, HQ, Home, Mascots, NotFound } from './pages';

export const routes = {
  ['/']: Home,
  ['/faq']: FAQ,
  ['/archive']: Archive,
  ['/hq']: HQ,
  ['/mascots']: Mascots,
};

export const App = () => {
  return (
    <LocationProvider>
      <MainLayout />
    </LocationProvider>
  );
};

if (typeof window !== 'undefined') {
  hydrate(<App />, document.getElementById('app'));
}

export async function prerender(data) {
  return await ssr(<App {...data} />);
}
