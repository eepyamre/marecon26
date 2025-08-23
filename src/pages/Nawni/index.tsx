import { random } from '@/utils';
import cn from 'classnames';
import { useEffect, useState } from 'preact/hooks';

import { Note, Page, Photo } from '@/components';

import nawniBomb from '@/assets/nawni_bomb.png';
import thumbUp from '@/assets/thumbup.png';

import css from './styles.module.scss';

const notes = [
  'do crime my children',
  'proudly run over 17 griffins with my 2005 DODGE SUPER CREW with HEMI',
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
    <Page stain burn className={css.page}>
      <div class={css.content}>
        <div class={css.nawniSays}>
          <div class={css.textWrapper}>
            <div class={css.saysTitle}>Nawni says...</div>
            <div class={css.text}>{note}</div>
          </div>
          <img class={css.img} src={thumbUp} alt={'nawni'} />
        </div>
        <div class={css.row}>
          {/* TODO CHANGE PIC */}
          <Photo className={css.nawni} src={nawniBomb}>
            Nawni
          </Photo>
          <p>
            This pony loves to ████! We just call her "Nawni." Her cutie mark is
            █████ with █████. That's all we're legally allowed to put here.
          </p>
          <Note className={cn(css.commentaryNote, css.comfiesNote)} tape>
            I keep a special, extra-large blanket on hand for her visits. It's
            mostly for soundproofing. But we <i>still</i> love her
            <strong>© Comfy</strong>
          </Note>
          <Note className={css.commentaryNote} tape>
            Nawni is super smart! She taught me how to get free Wi-Fi anywhere!
            My computer makes weird noises now, but the signal is great!
            <strong>© Smiley</strong>
          </Note>
        </div>
      </div>
    </Page>
  );
};
