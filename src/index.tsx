import { MainLayout } from '@/layouts/MainLayout';
import '@/styles.scss';
import { LocationProvider, hydrate, prerender as ssr } from 'preact-iso';

import { Archive, FAQ, HQ, Home, Mascots } from './pages';
import { Nawni } from './pages/Nawni';

export const routes = {
  ['/']: Home,
  ['/faq']: FAQ,
  ['/archive']: Archive,
  ['/hq']: HQ,
  ['/mascots']: Mascots,
  ['/nawni']: Nawni,
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
