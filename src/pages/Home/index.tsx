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

import { Note, Page, Photo } from '@/components';

import logo2 from '@/assets/logo2.webp';
import sleepy from '@/assets/sleepy.png';

import css from './styles.module.scss';

export const Home = () => {
  return (
    <Page className={css.page}>
      <img src={logo2} alt="Logo" class={css.logo} />

      <div className={css.content}>
        <div className={css.note}>(is not yet started)</div>
        <div class={css.stamp}>
          <h3>Date</h3>
          <span>XX.XX.2026</span>
        </div>
        <Photo className={css.sleepy} src={sleepy}>
          Shh... They're hibernating until the big day.
        </Photo>
        <div class={css.announcements}>
          <h3 class={css.noteTitle}>Current Happenings:</h3>
          <div class={css.list}>
            {APPLY_FOR_PANELS && (
              <Note className={cn(css.announcementNote, css.panelsNote)}>
                Panel submissions are now OPEN!{' '}
                <a href={PANELS_FORM_LINK} target="_blank">
                  Got an idea? Apply NOW!
                </a>
              </Note>
            )}
            {APPLY_FOR_VENDORS && (
              <Note className={cn(css.announcementNote, css.vendorsNote)}>
                Want to be a vendor?{' '}
                <a href={VENDORS_FORM_LINK} target="_blank">
                  Apply Here!
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
