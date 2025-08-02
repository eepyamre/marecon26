import { random } from '@/utils';
import { useEffect, useState } from 'preact/hooks';

import { Page, Photo } from '@/components';

import nawniBomb from '@/assets/nawni_bomb.png';
import thumbUp from '@/assets/thumbup.png';

import css from './styles.module.scss';

const notes = [
  'do crime my children',
  'proudly run over 17 griffins with my 2005 DODGE SUPER CREW WITH HEMI',
  'forklift certified',
  'i know your ip address.',
  'my special talent is still doing ur mom',
  'i can fit 3 entire hot dogs in my mouth. horizontally.',
  'put your life savings into crypto',
  'youtu.be/dQw4w9WgXcQ',
  'always trust anonymous sources.',
  'taxes are optional',
  'Celestia owes me 20 bits',
  'i regret nothing.',
  'does my voice annoy you?',
  'ask me about my griffonstone ban.',
  'this page is sponsored by raid: pony legends.',
  '>rape',
];

export const Nawni = () => {
  const [note, setNote] = useState('');

  useEffect(() => {
    setNote(notes[Math.floor(random(0, notes.length))]);
  }, []);

  return (
    <Page stain burn>
      <div class={css.content}>
        <div class={css.nawniSays}>
          <div class={css.textWrapper}>
            <div class={css.saysTitle}>Nawni says...</div>
            <div class={css.text}>{note}</div>
          </div>
          <img class={css.img} src={thumbUp} alt={'nawni'} />
        </div>
        <div class={css.row}>
          <Photo className={css.nawni} src={nawniBomb}>
            Nawni
          </Photo>
          {/* TODO UPDATE */}
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
      </div>
    </Page>
  );
};
