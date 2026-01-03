import { MainLayout } from '@/layouts/MainLayout';
import '@/styles.scss';
import { LocationProvider, hydrate, prerender as ssr } from 'preact-iso';

import {
  Archive,
  Comfy,
  FAQ,
  HQ,
  Home,
  Mascots,
  Nawni,
  Schedule,
  Smiley,
} from './pages';

export const routes = {
  ['/']: Home,
  ['/faq']: FAQ,
  ['/archive']: Archive,
  ['/hq']: HQ,
  ['/mascots']: Mascots,
  ['/nawni']: Nawni,
  ['/smiley']: Smiley,
  ['/comfy']: Comfy,
  ['/schedule']: Schedule,
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
