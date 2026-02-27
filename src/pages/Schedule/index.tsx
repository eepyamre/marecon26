import { PANELS_FORM_LINK } from '@/constants';
import { showTooltip, tooltipRef } from '@/layouts/MainLayout';
import { signal } from '@preact/signals';
import { FunctionalComponent } from 'preact';

import { Button, Page } from '@/components';

import css from './styles.module.scss';
import { TrackData, useSchedule } from './useSchedue';

type ScheduleProps = {
  day?: string;
  path?: string;
};

const progress = signal<number>(0);
let currentAnimationId: number | null = null;

export const closeTooltip = () => {
  if (currentAnimationId) {
    cancelAnimationFrame(currentAnimationId);
    currentAnimationId = null;
  }

  if (!tooltipRef.value) return;
  tooltipRef.value.style['--x'] = `0px`;
  tooltipRef.value.style['--y'] = `0px`;
  showTooltip.value = false;
  tooltipRef.value.lastChild.textContent = '';
  if (tooltipRef.value) {
    tooltipRef.value.style.setProperty('--progress', '0%');
  }
  progress.value = 0;
};

export const Schedule: FunctionalComponent<ScheduleProps> = ({
  day = 'friday',
}) => {
  const { events, times } = useSchedule(day);

  const isMobile = () => window.innerWidth <= 768;

  const animateBorder = () => {
    if (currentAnimationId) {
      cancelAnimationFrame(currentAnimationId);
    }

    const startTime = performance.now();
    const duration = 1000;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const newProgress = Math.min((elapsed / duration) * 100, 100);

      progress.value = newProgress;

      if (tooltipRef.value) {
        tooltipRef.value.style.setProperty('--progress', `${newProgress}%`);
      }

      if (newProgress < 100) {
        currentAnimationId = requestAnimationFrame(animate);
      } else {
        currentAnimationId = null;
      }
    };

    currentAnimationId = requestAnimationFrame(animate);
  };

  const mouseMove = (e: MouseEvent) => {
    if (!tooltipRef.value) {
      showTooltip.value = true;
      queueMicrotask(() => mouseMove(e));
      return;
    }
    if (e.target instanceof HTMLElement && e.target.dataset.trackdescription) {
      if (isMobile()) {
        return;
      }

      if (progress.value >= 100) {
        return;
      }

      const dw = tooltipRef.value.clientWidth / 2;
      tooltipRef.value.style.setProperty('--x', `${e.clientX - 24 - dw}px`);
      tooltipRef.value.style.setProperty('--y', `${e.clientY + 24}px`);

      showTooltip.value = true;
      tooltipRef.value.lastChild.textContent =
        e.target.dataset.trackdescription;

      if (!currentAnimationId) {
        progress.value = 0;
        tooltipRef.value.style.setProperty('--progress', '0%');
        requestAnimationFrame(() => {
          animateBorder();
        });
      }
      return;
    }
  };

  const onClick = (e: MouseEvent) => {
    if (!isMobile()) {
      if (progress.value === 100) closeTooltip();
      return;
    }
    if (e.target instanceof HTMLElement && e.target.dataset.trackdescription) {
      showTooltip.value = true;
      tooltipRef.value.lastChild.textContent =
        e.target.dataset.trackdescription;
      tooltipRef.value.style.setProperty('--y', `${e.clientY + 24}px`);
    } else {
      closeTooltip();
    }
  };

  const mouseOut = () => {
    if (isMobile()) {
      return;
    }

    if (progress.value < 100) {
      closeTooltip();
    }
  };

  return (
    <>
      <Page className={css.wrapper}>
        <h1 class={css.title}>Schedule</h1>
        <noscript>
          <p style={{ textAlign: 'center' }}>
            Can't fetch the schedule with JavaScript turned off. ucu
          </p>
        </noscript>
        <div class={css.nav}>
          <Button className={css.btn} href={'/schedule/friday'}>
            Friday
          </Button>
          <Button className={css.btn} href={'/schedule/saturday'}>
            Saturday
          </Button>
          <Button className={css.btn} href={'/schedule/sunday'}>
            Sunday
          </Button>
        </div>

        <div
          class={css.schedule}
          onMouseMove={mouseMove}
          onMouseOut={mouseOut}
          onClick={onClick}
        >
          <div class={css.times}>
            <div class={css.timeTitle} />
            {times.map((time, i) => {
              return (
                <div class={css.time} key={i}>
                  {time.toLocaleTimeString(undefined, {
                    hour12: true,
                    hour: '2-digit',
                    minute: '2-digit',
                    // timeZone: '-05:00',
                  })}
                </div>
              );
            })}
          </div>
          <div class={css.track}>
            {Track(events.track1, 1, 'https://cytu.be/r/marecon')}
          </div>
          <div class={css.track}>
            {Track(
              events.track2,
              2,
              'https://cytu.be/r/marecon2-comfys-cottage',
            )}
          </div>
        </div>
        <div className={css.row}>
          <p class={css.hint}>
            Time is adjusted according to (you)r time zone! Now for real!
          </p>
          <Button
            className={css.apply}
            target={'_blank'}
            href={PANELS_FORM_LINK}
          >
            Apply for panels!
          </Button>
        </div>
      </Page>
    </>
  );
};

const Track = (track: TrackData[], idx: number, link: string) => {
  return (
    <>
      <a href={link} class={css.trackTitle} target={'_blank'}>
        Cytube {idx}
      </a>
      {track.map((item, i) => {
        if (!item) return <div class={css.emptyItem} />;
        return (
          <div
            key={item.title + i}
            style={{
              '--widthColumns': item.width,
            }}
            class={css.trackItem}
            data-trackdescription={item.description}
          >
            {item.title}
          </div>
        );
      })}
    </>
  );
};
