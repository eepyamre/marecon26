import cn from 'classnames';

import { Note, Page, Photo } from '@/components';

import awards from '../../assets/awards.png';
import balloon from '../../assets/ballon.png';
import smileyImage from '../../assets/everymare.png';
import flower from '../../assets/flower.png';
import heart from '../../assets/heart.png';
import star from '../../assets/star.png';
import sun from '../../assets/sun.png';
import css from './styles.module.scss';

export const Smiley = () => {
  return (
    <Page>
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
    </Page>
  );
};
