import { APPLY_FOR_HQ, HQ_FORM_LINK, HQ_FULFILLMENT } from '@/constants';
import cn from 'classnames';

import { Button, Note, Page, Photo } from '@/components';

import map from '@/assets/hq.jpg';
import marecon from '@/assets/marecon_bc_noborder.png';

import css from './styles.module.scss';

export const HQ = () => {
  return (
    <Page className={css.page}>
      <h1 class={css.title}>HQ Info</h1>
      <div class={css.content}>
        <h2 class={css.subTitle}>What is Marecon HQ?</h2>
        <p class={css.description}>
          Marecon HQ is an airbnb that's used to host the con and several of its
          panels. The anons at the HQ are chosen from those that are capable of
          finding and filling out a survey posted in the early marecon planning
          thread.
        </p>

        {HQ_FULFILLMENT ? (
          <>
            <div class={css.status}>Status: FULL</div>
            <Note className={css.note}>
              <span class={css.tip}>Pro tip:</span>
              <span>if you want to join next year, just lurk moar</span>
            </Note>
          </>
        ) : APPLY_FOR_HQ ? (
          <Button target="_blank" href={HQ_FORM_LINK}>
            Apply
          </Button>
        ) : null}

        <div class={css.photos}>
          <Photo className={css.photo} src={map}>
            Location
          </Photo>
          <Photo className={cn(css.photo, css.photo2)} src={marecon}>
            Inside HQ
          </Photo>
        </div>
      </div>
    </Page>
  );
};
