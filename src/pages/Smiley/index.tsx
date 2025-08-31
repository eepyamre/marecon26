import { useScrollHeight } from '@/hooks/useScrollHeight';
import cn from 'classnames';
import { useState } from 'preact/hooks';

import { setAccessories } from '@/state';

import { Note, Page, Photo } from '@/components';

import balloon from '@/assets/ballon.png';
import awards from '@/assets/cutie2.png';
import smileyImage from '@/assets/everymare.png';
import flower from '@/assets/flower.png';
import heart from '@/assets/heart.png';
import lilNawni from '@/assets/lil_nawni.png';
import clip from '@/assets/smiley_mane_clip.png';
import star from '@/assets/star.png';
import sun from '@/assets/sun.png';

import css from './styles.module.scss';

export const Smiley = () => {
  const [isAnimated, setIsAnimated] = useState(false);
  useScrollHeight(() => {
    setIsAnimated(true);
    setAccessories({ clip: true });
  });

  return (
    <Page className={css.page}>
      <div class={css.content}>
        <img class={cn(css.img, css.star)} src={star} alt="star" />
        <img class={cn(css.img, css.sun)} src={sun} alt="sun" />
        <img class={cn(css.img, css.heart)} src={heart} alt="heart" />
        <img class={cn(css.img, css.flower)} src={flower} alt="flower" />
        <img class={cn(css.img, css.balloon)} src={balloon} alt="balloon" />

        <div class={css.row}>
          <Photo className={css.smiley} src={smileyImage} noText />
          <div>
            <h2>Smiley Face</h2>
            <p>
              She looks like a sugar cookie and she’s just as sweet! We call her
              “Ms. Everymare” because she embodies the best part of every mare.
              She may not be the brightest spoon in the shed, but her heart is
              huge and she's always looking to brighten your day!
            </p>
          </div>
          <Note className={cn(css.commentaryNote, css.comfiesNote)} tape>
            Her visits are a ray of sunshine!
            <strong>© Comfy</strong>
          </Note>
        </div>

        <div class={cn(css.trophyWall, css.row)}>
          <div>
            <h3 class={css.trophyTitle}>Achievements</h3>
            <ul>
              <li>3-Time Reigning Champion of the Mare Smackdown</li>
              <li>Grand Champion of the “Smile Off”</li>
              <li>
                Nationally Recognized as “The Mare-iest Mare That Ever Mared”
              </li>
              <li>Holder of the "Absolute Dumper" Award (Peer-Reviewed)</li>
            </ul>
            <Note className={cn(css.commentaryNote, css.nawnisNote)} tape>
              Yeah, she's sweet, whatever. That dumper ain't just for show,
              either.
              <strong>© Nawni</strong>
            </Note>
          </div>
          <Photo src={awards} className={css.awards} noText />
        </div>
      </div>
      <div class={cn(css.nawniWrapper, { [css.animated]: isAnimated })}>
        <img
          src={lilNawni}
          alt={'lilNawni'}
          class={cn(css.lilNawni, { [css.animated]: isAnimated })}
        />
      </div>
      <div class={cn(css.clipWrapper, { [css.animated]: isAnimated })}>
        <img
          src={clip}
          alt={'clip'}
          class={cn(css.clip, { [css.animated]: isAnimated })}
        />
      </div>
    </Page>
  );
};
