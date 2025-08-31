import { useScrollHeight } from '@/hooks/useScrollHeight';
import cn from 'classnames';
import { useState } from 'preact/hooks';

import { setAccessories } from '@/state';

import { Note, Page, Photo } from '@/components';

import comfyEmote from '@/assets/comfy-comfy.png';
import comfySplat from '@/assets/comfy_splat.png';
import sweater from '@/assets/comfy_sweater.png';
import comfy from '@/assets/cuties.png';
import lilNawni from '@/assets/lil_nawni.png';

import css from './styles.module.scss';

export const Comfy = () => {
  const [isAnimated, setIsAnimated] = useState(false);
  useScrollHeight(() => {
    setIsAnimated(true);
    setAccessories({ sweater: true });
  });

  return (
    <Page className={css.page}>
      <img src={comfyEmote} class={css.comfyEmote} />
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
              She loves to play with her anon plushie. But its a secret. {'>'}co
              <strong>© Nawni</strong>
            </Note>
          </div>
        </div>

        <img src={comfySplat} alt={'belly'} class={css.belly} />

        <img
          src={lilNawni}
          alt={'lilNawni'}
          class={cn(css.lilNawni, { [css.animated]: isAnimated })}
        />
        <img
          src={sweater}
          alt={'sweater'}
          class={cn(css.sweater, { [css.animated]: isAnimated })}
        />
      </div>
    </Page>
  );
};
