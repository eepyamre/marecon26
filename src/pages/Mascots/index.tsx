import cn from 'classnames';

import { Page, Photo } from '@/components';

import comfy from '@/assets/comfy.png';
import nawniBomb from '@/assets/nawni_bomb.png';
import smiley from '@/assets/sm1.png';

import css from './styles.module.scss';

export const Mascots = () => {
  return (
    <Page>
      <h1 class={css.title}>Mascots</h1>
      <a href={'/comfy'} class={cn(css.mascotsContainer, css.comfyContainer)}>
        <Photo className={css.comfy} src={comfy}>
          Comfy Cuddles
        </Photo>
        <div class={css.description}>
          <p>
            She’s the comfiest pony around, it’s in her name! Comfy Cuddles is
            the earth pony in charge of keeping things at marecon comfy. Whether
            it’s brewing up some hot cocoa, tending to the fire, or handing out
            blankets, Comfy just wants to see you… well, comfy! She’s not one to
            talk much, except for the occasional nod or gesture towards the hot
            cocoa! She’s a very bright pony, but she’s also very reserved, only
            speaking up when needed to keep things on track or keep the other
            two mascots in line.
          </p>
        </div>
      </a>

      <a href={'/smiley'} class={cn(css.mascotsContainer, css.smileyContainer)}>
        <Photo className={css.smiley} src={smiley}>
          Smiley Face
        </Photo>
        <div class={css.description}>
          <p>
            She looks like a sugar cookie and she’s just as sweet! Smiley Face
            is a mare that embodies the best part of every mare… their smiley
            faces! We like to call her “Ms. Everymare” because of it. Smiley is
            very creative and goofy, she loves to have fun with her friends! She
            may not be the brightest spoon in the shed, but she has a huge
            heart! Talking to her is an absolute joy, she’s a little ray of
            sunshine that’s always looking to brighten your day!
          </p>
        </div>
      </a>

      <a href={'/nawni'} class={cn(css.mascotsContainer, css.nawniContainer)}>
        <Photo className={css.nawni} src={nawniBomb}>
          Nawni
        </Photo>
        <div class={css.description}>
          <p>
            This pony loves to ████! ████████ ████████ is a mysterious pegasus
            that likes to stay anonymous. She doesn’t like it when we use her
            real name, so we just call her “Nawni” (get it? Like anonymous!) Her
            cutie mark is a █████ with █████ - very cool! When we asked her what
            her special talent was, she said “doing ur mom, lul”. She can be a
            bit crude and kind of a wildcard at times, but we love her all the
            same!
          </p>
        </div>
      </a>
    </Page>
  );
};
