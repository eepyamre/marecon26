import { useEffect, useState } from 'preact/hooks';

export type TrackData = {
  title: string;
  width: number;
  description: string;
  time: Date;
};

const min15 = 15 * 60 * 1000;

export const useSchedule = (day: string) => {
  const [times, setTimes] = useState<Date[]>([]);
  const [events, setEvents] = useState<{
    track1: TrackData[];
    track2: TrackData[];
    track3: TrackData[];
  }>({
    track1: [],
    track2: [],
    track3: [],
  });

  const dayIdx = (() => {
    switch (day) {
      case 'friday':
        return 0;
      case 'saturday':
        return 1;
      case 'sunday':
        return 2;
      default:
        return 0;
    }
  })();

  const fetchData = async () => {
    // TODO: url
    const response = await fetch('/schedule.json');
    const result = (await response.json()) as {
      title: string;
      from: string;
      duration: number;
      description: string;
      ch: string[];
      unixtime: number;
    }[][];
    let track1: TrackData[] = [];
    let track2: TrackData[] = [];
    let track3: TrackData[] = [];

    const parseTracks = (data: (typeof result)[0]) => {
      const track: TrackData[] = [];

      for (let i = 0; i < data.length; i++) {
        const item = data[i];
        const next = data[i + 1];

        const startTime = new Date(item.unixtime);
        const obj: TrackData = {
          title: item.title,
          description: item.description,
          width: item.duration / 15,
          time: startTime,
        };

        track.push(obj);

        if (next) {
          const endTime = next.unixtime;
          const diffBlocks =
            (endTime - startTime.getTime()) / 1000 / 60 / 15 - obj.width;

          for (let j = 0; j < diffBlocks; j++) {
            track.push(null);
          }
        }
      }

      return track;
    };

    const r1 = result[dayIdx].filter((item) =>
      item.ch.includes('https://cytu.be/r/marecon'),
    );
    const r2 = result[dayIdx].filter((item) =>
      item.ch.includes('https://cytu.be/r/marecon2-comfys-cottage'),
    );
    const r3 = result[dayIdx].filter((item) =>
      item.ch.includes('https://cytu.be/r/marecon3-smileys-studio'),
    );

    track1 = parseTracks(r1);
    track2 = parseTracks(r2);
    track3 = parseTracks(r3);

    const obj: typeof events = {
      track1,
      track2,
      track3,
    };

    const t0Time = track1[0]?.time.getTime();
    const t1Time = track2[0]?.time.getTime();
    const t2Time = track3[0]?.time.getTime();
    let startTime = Math.min(t0Time, t1Time, t2Time);
    let lastTime = startTime + min15;
    let times: Date[] = [new Date(startTime)];

    for (let i = track1.length - 1; i >= 0; i--) {
      const item = track1[i];
      const skipped = track1.length - 1 - i;
      if (item) {
        lastTime = item.time.getTime() + item.width * min15 + skipped * min15;
        break;
      }
    }

    for (let i = track2.length - 1; i >= 0; i--) {
      const item = track2[i];
      if (item) {
        const skipped = track2.length - 1 - i;
        const time = item.time.getTime() + item.width * min15 + skipped * min15;

        if (time >= lastTime) {
          lastTime = time;
        }
        break;
      }
    }

    for (let i = track3.length - 1; i >= 0; i--) {
      const item = track3[i];
      if (item) {
        const skipped = track3.length - 1 - i;
        const time = item.time.getTime() + item.width * min15 + skipped * min15;

        if (time >= lastTime) {
          lastTime = time;
        }
        break;
      }
    }

    for (let i = startTime + min15; i < lastTime; i += min15) {
      times.push(new Date(i));
    }

    if (t0Time > startTime) {
      let l = Math.round((t0Time - startTime) / min15);
      while (l--) {
        track1.unshift(null);
      }
    }
    if (t1Time > startTime) {
      let l = Math.round((t1Time - startTime) / min15);
      while (l--) {
        track2.unshift(null);
      }
    }
    if (t2Time > startTime) {
      let l = Math.round((t2Time - startTime) / min15);
      while (l--) {
        track3.unshift(null);
      }
    }

    setTimes(times);
    setEvents(obj);
  };

  useEffect(() => {
    fetchData();
  }, [dayIdx]);

  return { times, events };
};
