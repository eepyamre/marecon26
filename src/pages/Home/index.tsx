import {
  APPLY_FOR_HQ,
  APPLY_FOR_PANELS,
  APPLY_FOR_VENDORS,
  APPLY_VOLUNTEER,
  HQ_FULFILLMENT,
  PANELS_FORM_LINK,
  VENDORS_FORM_LINK,
  VOLUNTEER_FORM_LINK,
} from '@/constants';
import cn from 'classnames';
import { useEffect, useState } from 'preact/hooks';

import { Note, Page, Photo } from '@/components';

import logo0 from '@/assets/logo/0.webp';
import logo1 from '@/assets/logo/1.webp';
import logo2 from '@/assets/logo/2.webp';
import logo3 from '@/assets/logo/3.webp';
import logo4 from '@/assets/logo/4.webp';
// import sleepy from '@/assets/sleepy.png';
import snowpityyy from '@/assets/snowpityyy.png';

import css from './styles.module.scss';

export const Home = () => {
  const [logoUrl, setLogoUrl] = useState(logo4);

  useEffect(() => {
    const startTime = 1774639800000;
    const endTime = 1774830600000;

    const pictures = [logo0, logo1, logo2, logo3, logo4].reverse();

    const currentTime = Date.now();
    let selectedIndex = 0;

    if (currentTime <= startTime) {
      selectedIndex = 0;
    } else if (currentTime >= endTime) {
      selectedIndex = pictures.length - 1;
    } else {
      const totalDuration = endTime - startTime;
      const timePerPicture = totalDuration / pictures.length;

      const timeElapsed = currentTime - startTime;

      selectedIndex = Math.floor(timeElapsed / timePerPicture);
    }

    setLogoUrl(pictures[selectedIndex]);
  }, []);

  return (
    <Page className={css.page}>
      <img src={logoUrl} alt="Logo" class={css.logo} />

      <div className={css.content}>
        <div className={css.note}>(less than a week away!)</div>
        <div class={css.stamp}>
          <h3>Date</h3>
          <span>March 27-29</span>
        </div>
        <Photo className={css.sleepy} src={snowpityyy}>
          Look at them go!
        </Photo>
        <div class={css.announcements}>
          <h3 class={css.noteTitle}>Current Happenings:</h3>
          <div class={css.list}>
            {APPLY_FOR_VENDORS && (
              <Note className={cn(css.announcementNote, css.vendorsNote)}>
                Want to be a vendor?{' '}
                <a href={VENDORS_FORM_LINK} target="_blank">
                  Apply Here!
                </a>
              </Note>
            )}
            {APPLY_FOR_PANELS && (
              <Note className={cn(css.announcementNote, css.panelsNote)}>
                Panel submissions are now OPEN!{' '}
                <a href={PANELS_FORM_LINK} target="_blank">
                  Got an idea? Apply NOW!
                </a>
              </Note>
            )}
            {APPLY_FOR_HQ && !HQ_FULFILLMENT && (
              <Note className={cn(css.announcementNote, css.hqNote)}>
                Help run the con from the inside.
                <a href="/hq">What's HQ?</a>
              </Note>
            )}

            {APPLY_VOLUNTEER && (
              <Note className={cn(css.announcementNote, css.hqNote)}>
                Help out with the con without being there in person.
                <a href={VOLUNTEER_FORM_LINK} target="_blank">
                  Apply Here!
                </a>
              </Note>
            )}

            {!APPLY_FOR_PANELS &&
              !APPLY_FOR_VENDORS &&
              !APPLY_FOR_HQ &&
              !APPLY_VOLUNTEER && (
                <Note className={css.announcementNote}>
                  Nothing... Check back later or lurk the catalog for more info.
                </Note>
              )}
          </div>
        </div>
      </div>
    </Page>
  );
};
