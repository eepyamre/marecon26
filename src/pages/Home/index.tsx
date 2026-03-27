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
import { random } from '@/utils';
import cn from 'classnames';
import { useEffect, useState } from 'preact/hooks';

import { Button, Note, Page, Photo } from '@/components';

import live1 from '@/assets/LIVE/1.gif';
import live2 from '@/assets/LIVE/2.gif';
import live3 from '@/assets/LIVE/3.gif';
import comfy2 from '@/assets/comfy2.png';
import logo0 from '@/assets/logo/0.webp';
import logo1 from '@/assets/logo/1.webp';
import logo2 from '@/assets/logo/2.webp';
import logo3 from '@/assets/logo/3.webp';
import logo4 from '@/assets/logo/4.webp';
import bapLogo from '@/assets/logo/bap.webp';
// import sleepy from '@/assets/sleepy.png';
import snowpityyy from '@/assets/snowpityyy.png';

import css from './styles.module.scss';

const BAP_LOGO_CHANCE = 0.05;

type LivePanel = {
  title: string;
  ch: string[];
};

export const Home = () => {
  const [logoUrl, setLogoUrl] = useState(logo4);
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0 });
  const [countdownEnded, setCountdownEnded] = useState(false);
  const [cardUrl, setCardUrl] = useState(snowpityyy);
  const [livePanels, setLivePanels] = useState<LivePanel[]>([]);

  useEffect(() => {
    const cardUrls = [snowpityyy, live1, live2, live3];

    setCardUrl(cardUrls[Math.round(random(0, cardUrls.length))] ?? snowpityyy);
    if (BAP_LOGO_CHANCE > Math.random()) {
      setLogoUrl(bapLogo);
      return;
    }

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

  useEffect(() => {
    const targetTime = 1774639800000;

    const updateCountdown = () => {
      const now = Date.now();
      const diff = targetTime - now;

      if (diff <= 0) {
        setCountdown({ days: 0, hours: 0, minutes: 0 });
        setCountdownEnded(true);
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

      setCountdown({ days, hours, minutes });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 60000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const fetchLivePanels = async () => {
      try {
        const response = await fetch('/schedule.json');
        const schedule = (await response.json()) as {
          title: string;
          unixtime: number;
          duration: number;
          ch: string[];
        }[][];

        const now = Date.now();
        const allPanels = schedule.flat();
        const current = allPanels.filter(
          (panel) =>
            now >= panel.unixtime &&
            now <= panel.unixtime + panel.duration * 60 * 1000,
        );

        setLivePanels(current.map((p) => ({ title: p.title, ch: p.ch })));
      } catch {
        // schedule.json unavailable, ignore
      }
    };

    fetchLivePanels();
  }, []);

  const announcments = (
    <div class={css.announcements}>
      <h3 class={css.noteTitle}>Current Happenings:</h3>
      <div class={css.list}>
        {countdownEnded && livePanels.length > 0 && (
          <>
            {livePanels.map((panel) => (
              <Note className={cn(css.announcementNote, css.livePanelNote)}>
                <a href={panel.ch[0]} target="_blank">
                  {panel.title}
                </a>
              </Note>
            ))}
          </>
        )}
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
              {countdownEnded ? "We're LIVE!" : 'Starting soon!'} Jump right
              into the <a href="https://cytu.be/r/marecon">CyTube channel</a> or{' '}
              <a href="/schedule">check the schedule</a>!
            </Note>
          )}
      </div>
    </div>
  );

  return (
    <Page className={css.page}>
      <img src={logoUrl} alt="Logo" class={css.logo} />

      <div className={css.content}>
        <div class={css.note}>
          {countdownEnded ? 'LIVE!' : 'Starting Soon!'}
        </div>

        {countdownEnded && announcments}

        <div class={css.photos}>
          <Photo className={css.sleepy} src={cardUrl}>
            Look at them go!
          </Photo>

          <Photo className={css.comfy2} src={comfy2}>
            Marecon-ing hard
          </Photo>
        </div>
        {!countdownEnded && (
          <div class={css.stamp}>
            <h3>Starting in</h3>
            <span>
              {countdown.days}d {countdown.hours}h {countdown.minutes}m
            </span>
          </div>
        )}

        {!countdownEnded && announcments}
      </div>
    </Page>
  );
};
