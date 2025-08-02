import cn from 'classnames';

import { Note, Page, Photo } from '@/components';

import comfy from '../../assets/comfy-comfy.png';
import css from './styles.module.scss';

export const Comfy = () => {
  return (
    <Page>
      <div class={css.content}>
        <div class={css.row}>
          <Photo src={comfy} className={css.img}>
            :comfy:
          </Photo>
          <div>
            <h2>Comfy Cuddles</h2>
            <p>
              She's the quiet heart of the trio, the anchor in a sea of chaos.
              With a warm blanket and a perfectly brewed cup of cocoa, she
              ensures the marecon remains comfy. She rarely speaks, but her
              steady gaze speaks volumes.
            </p>
          </div>
          <div class={css.row}>
            <Note className={cn(css.commentaryNote, css.smileysNote)} tape>
              Hanging out with Comfy is like being wrapped in a warm burrito.
              11/10, would get wrapped again!
              <strong>© Smiley</strong>
            </Note>
            <Note className={cn(css.commentaryNote, css.nawnisNote)} tape>
              She's got 'aura'. And her cocoa is S-tier. Just don't mention the
              plane incident...
              <strong>© Nawni</strong>
            </Note>
          </div>
        </div>
      </div>
    </Page>
  );
};
