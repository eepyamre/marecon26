import { useEffect, useState } from 'preact/hooks';

import eyebeam from '@/assets/hijack/eyebeam.gif';
import kekeke from '@/assets/hijack/kekeke.gif';
import sexo from '@/assets/hijack/sexo.png';
import sleep from '@/assets/hijack/sleep.png';
import unf from '@/assets/hijack/unf.gif';

import css from './styles.module.scss';

const HIJACK_IMAGES = [eyebeam, sleep, unf, sexo, kekeke];
const HIJACK_CHANCE = 0.01;

export const HijackScreen = ({
  children,
}: {
  children: preact.ComponentChildren;
}) => {
  const [hijacked, setHijacked] = useState<boolean | null>(null);
  const [image, setImage] = useState<string | null>(null);

  useEffect(() => {
    const isHijacked = Math.random() <= HIJACK_CHANCE;
    setHijacked(isHijacked);

    if (isHijacked) {
      const randomImage =
        HIJACK_IMAGES[Math.floor(Math.random() * HIJACK_IMAGES.length)];
      setImage(randomImage);
    }
  }, []);

  if (hijacked === null) {
    return null;
  }

  // Normal site
  if (!hijacked) {
    return <>{children}</>;
  }

  // HIJACKED!
  return (
    <div class={css.overlay}>
      <img src={image!} alt="" class={css.backgroundImage} />
      <div class={css.content}>
        <h1 class={css.title}>SITE HIJACKED</h1>
        <p class={css.message}>
          This site was hijacked by{' '}
          <span class={css.highlight}>TRUE BAP SUPREMACISTS</span>
        </p>
        <p class={css.submessage}>Kneel before our Guilty Pleasure.</p>
      </div>
    </div>
  );
};
