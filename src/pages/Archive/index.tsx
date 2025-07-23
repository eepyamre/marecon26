import cn from 'classnames';

import { Button, Page, Photo } from '@/components';

import paceholder from '../../assets/paceholder.png';
import css from './styles.module.scss';

export const Archive = () => {
  return (
    <Page>
      <h1 class={css.title}>Archive</h1>
      <p class={css.description}>A look back at where we've been.</p>
      <div class={css.content}>
        <div class={css.item}>
          <Photo className={css.photo} src={paceholder}>
            2025
          </Photo>
          <div class={css.itemContent}>
            <h2 class={css.subTitle}>
              <a target={'_blank'} href="//2025.marecon.live">
                2025: Marepoint Meltdown
              </a>
            </h2>
            <p>
              This was the year of Marepoints, and the glorious,
              totally-not-rigged war between three factions of autists that
              followed. A conflict so legendary it ended with half the board
              getting banned.
            </p>
            <Button target="_blank" href="//2025.marecon.live">
              Noted!
            </Button>
          </div>
        </div>
        <div class={css.item}>
          <Photo className={cn(css.photo, css.photoSecond)} src={paceholder}>
            2024
          </Photo>
          <div class={css.itemContent}>
            <h2 class={css.subTitle}>
              <a target={'_blank'} href="//2024.marecon.live">
                2024: New Beginning
              </a>
            </h2>
            <p>
              The year the world was formally introduced to The Comfy One, The
              Smiley One, and The Problem Child. They were supposed to be simple
              mascots. Instead, they took over. The con itself also being a huge
              success was just a bonus.
            </p>
            <Button target="_blank" href="//2024.marecon.live">
              The Birth of Marecon
            </Button>
          </div>
        </div>
      </div>
    </Page>
  );
};
