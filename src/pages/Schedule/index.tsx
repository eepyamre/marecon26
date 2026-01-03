import { FC, useEffect, useRef, useState } from 'preact/compat';

import { Button, Page, Tooltip } from '@/components';

import css from './styles.module.scss';
import { TrackData, useSchedule } from './useSchedue';

type ScheduleProps = {
  day?: string;
};

export const Schedule: FC<ScheduleProps> = ({ day = 'friday' }) => {
  const { events, times } = useSchedule(day);

  const [tooltipData, setTooltipData] = useState({
    position: [0, 0] as [number, number],
    text: '',
    visible: false,
  });

  useEffect(() => {
    const fn = (e: TouchEvent) => {
      if (tooltipData.visible) {
        e.preventDefault();
        setTooltipData({
          position: [0, 0],
          visible: false,
          text: '',
        });
      }
    };

    addEventListener('touchend', fn);
    return () => {
      removeEventListener('touchend', fn);
    };
  }, [tooltipData]);

  const mouseMove = (e: MouseEvent) => {
    if (e.target instanceof HTMLElement && e.target.dataset.trackdescription) {
      const dw = Math.max(0, window.innerWidth - 900) / 2;
      setTooltipData({
        position: [
          e.clientX - 24 - dw,
          e.clientY - 48 + document.scrollingElement.scrollTop,
        ],
        visible: true,
        text: e.target.dataset.trackdescription,
      });
      return;
    }
    if (tooltipData.visible) {
      setTooltipData({
        position: [0, 0],
        visible: false,
        text: '',
      });
    }
  };

  const mouseOut = () => {
    setTooltipData({
      position: [0, 0],
      visible: false,
      text: '',
    });
  };

  return (
    <Page className={css.wrapper}>
      <h1 class={css.title}>Schedule</h1>
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

      <div class={css.schedule} onMouseMove={mouseMove} onMouseOut={mouseOut}>
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
          {Track(events.track2, 2, 'https://cytu.be/r/marecon2-comfys-cottage')}
        </div>
      </div>
      <div className={css.row}>
        <p class={css.hint}>Time is adjusted according to (you)r time zone!</p>
        {/* <a
          class={`global_btn ${css.apply}`}
          target={'_blank'}
          href={'https://forms.gle/kXxHwiyC1iBdmTFT8'}
        >
          Apply for panels!
        </a> */}
      </div>
      {tooltipData.visible && (
        <Tooltip position={tooltipData.position}>{tooltipData.text}</Tooltip>
      )}
    </Page>
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
