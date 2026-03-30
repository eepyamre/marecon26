import { useEffect, useState } from 'preact/hooks';

import eyebeam from '@/assets/hijack/eyebeam.gif';
import kekeke from '@/assets/hijack/kekeke.gif';
import sexo from '@/assets/hijack/sexo.png';
import sleep from '@/assets/hijack/sleep.png';
import unf from '@/assets/hijack/unf.gif';

import css from './styles.module.scss';

const AD_IMAGES = [eyebeam, sleep, unf, sexo, kekeke];
const AD_CHANCE = 0;
const AD_DELAY = 3000;
const CLOSE_TIMER = 3;
const INITIAL_DISTANCE = 1000;

export const HotBatAd = () => {
  const [showAd, setShowAd] = useState(false);
  const [image, setImage] = useState<string | null>(null);
  const [countdown, setCountdown] = useState(CLOSE_TIMER);
  const [canClose, setCanClose] = useState(false);
  const [isRunVariant, setIsRunVariant] = useState(false);
  const [distance, setDistance] = useState(INITIAL_DISTANCE);

  useEffect(() => {
    if (Math.random() >= AD_CHANCE) {
      return;
    }

    const randomImage = AD_IMAGES[Math.floor(Math.random() * AD_IMAGES.length)];
    setImage(randomImage);
    setIsRunVariant(Math.random() >= 0.5);

    const showTimer = setTimeout(() => {
      setShowAd(true);
    }, AD_DELAY);

    return () => clearTimeout(showTimer);
  }, []);

  useEffect(() => {
    if (!showAd || canClose) return;

    if (countdown <= 0) {
      setCanClose(true);
      return;
    }

    const timer = setTimeout(() => {
      setCountdown(countdown - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [showAd, countdown, canClose]);

  useEffect(() => {
    if (!showAd || !isRunVariant || distance <= 0) return;

    const timer = setTimeout(() => {
      setDistance((d) => Math.max(0, d - 50));
    }, 1500);

    return () => clearTimeout(timer);
  }, [showAd, isRunVariant, distance]);

  const handleClose = () => {
    if (canClose) {
      setShowAd(false);
    }
  };

  if (!showAd || !image) {
    return null;
  }

  return (
    <div class={css.ad}>
      <button
        class={css.closeBtn}
        onClick={handleClose}
        disabled={!canClose}
        title={canClose ? 'Close' : `Wait ${countdown}s`}
      >
        {canClose ? '×' : `${countdown}s`}
      </button>

      <div class={css.content}>
        <img src={image} alt="" class={css.image} />
        <div class={css.text}>
          {isRunVariant ? (
            <>
              <h3 class={css.title}>hot single bat in {distance} meters</h3>
              {distance > 0 ? (
                <p class={css.subtitle}>they're getting closer...</p>
              ) : (
                <p class={css.subtitle}>right behind you</p>
              )}
              <a
                href="https://cytu.be/r/marecon"
                target="_blank"
                rel="noopener noreferrer"
                class={css.button}
              >
                {`>>> RUN <<<`}
              </a>
            </>
          ) : (
            <>
              <h3 class={css.title}>HOT SINGLE BAT IN YOUR AREA</h3>
              <p class={css.subtitle}>Click NOW to cream your pants!</p>
              <a
                href="https://cytu.be/r/marecon"
                target="_blank"
                rel="noopener noreferrer"
                class={css.button}
              >
                {`>>> CLICK HERE <<<`}
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
