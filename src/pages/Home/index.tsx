import cn from 'classnames';

import { applyForHq, applyForPanels, applyForVendors } from '@/state';

import { Note, Page, Photo } from '@/components';

import sleepy from '@/assets/sleepy.png';

import css from './style.module.scss';

export const Home = () => {
  return (
    <Page>
      <h1 class={css.title}>Marecon 2026</h1>
      <div class={css.stamp}>
        <h3>Date</h3>
        <span>XX.XX.2026</span>
      </div>
      <div className={css.content}>
        <div className={css.note}>(is not yet started)</div>
        <Photo className={css.sleepy} src={sleepy}>
          Shh... They're hybernating untill the big day.
        </Photo>
        <div class={css.announcements}>
          <h3 class={css.noteTitle}>Current Happenings:</h3>
          <div class={css.list}>
            {applyForPanels.value && (
              <Note className={cn(css.announcementNote, css.panelsNote)}>
                Panel submissions are now OPEN!{' '}
                <a href="#">Got an idea? Apply NOW!</a>
              </Note>
            )}
            {applyForVendors.value && (
              <Note className={cn(css.announcementNote, css.vendorsNote)}>
                Want to be a vendor? <a href="#">Apply Here!</a>
              </Note>
            )}
            {applyForHq.value && (
              <Note className={cn(css.announcementNote, css.hqNote)}>
                Think you can survive a weekend running the con in person?{' '}
                <a href="/hq">The HQ needs new blood.</a>
              </Note>
            )}
            {!applyForPanels.value &&
              !applyForVendors.value &&
              !applyForHq.value && (
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
