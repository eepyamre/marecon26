import cn from 'classnames';

import { Pages } from '@/state/types';

import { hqFulfillment } from '@/state';

import { Button, Note, Page, Photo } from '@/components';

import map from '@/assets/hq.jpg';
import marecon from '@/assets/mareocn.png';

import css from './styles.module.scss';

export const HQ = () => {
  return (
    <Page page={Pages.HQ}>
      <h1 class={css.title}>HQ Info</h1>
      <div class={css.content}>
        <h2 class={css.subTitle}>What is Marecon HQ?</h2>
        <p class={css.description}>
          Marecon HQ is an airbnb that's used to host the con and several of its
          panels. The anons at the HQ are chosen from those that are capable of
          finding and filling out a survey posted in the early marecon planning
          thread.
        </p>

        {hqFulfillment.value ? (
          <>
            <div class={css.status}>Status: FULL</div>
            <Note className={css.note}>
              <span class={css.tip}>Pro tip:</span>
              <span>if you want to join next year, just lurk moar</span>
            </Note>
          </>
        ) : (
          <Button>Apply</Button>
        )}

        <div class={css.photos}>
          <Photo className={css.photo} src={map}>
            Secret HQ Location
          </Photo>
          <Photo className={cn(css.photo, css.photo2)} src={marecon}>
            Actual interior photo
          </Photo>
        </div>
      </div>
    </Page>
  );
};
