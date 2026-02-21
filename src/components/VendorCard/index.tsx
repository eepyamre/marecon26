import cn from 'classnames';
import { FC, useCallback, useState } from 'preact/compat';

import css from './styles.module.scss';

type VendorCardProps = {
  name: string;
  description: string;
  images: string[];
  website?: string;
  className?: string;
};

export const VendorCard: FC<VendorCardProps> = ({
  name,
  description,
  images,
  website,
  className,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageCount = images.length;

  const goToPrev = useCallback(
    (e: MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setCurrentIndex((prev) => (prev === 0 ? imageCount - 1 : prev - 1));
    },
    [imageCount],
  );

  const goToNext = useCallback(
    (e: MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setCurrentIndex((prev) => (prev === imageCount - 1 ? 0 : prev + 1));
    },
    [imageCount],
  );

  const goToIndex = useCallback(
    (index: number) => (e: MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setCurrentIndex(index);
    },
    [],
  );

  if (imageCount === 0) {
    return null;
  }

  if (imageCount === 1) {
    return (
      <a
        href={website}
        target="_blank"
        rel="noopener noreferrer"
        class={cn(css.card, className)}
      >
        <div class={css.imageWrapper}>
          <img src={images[0]} alt={name} />
        </div>
        <div class={css.textWrapper}>
          <div class={css.name}>{name}</div>
          <div class={css.description}>{description}</div>
        </div>
      </a>
    );
  }

  return (
    <a
      href={website}
      target="_blank"
      rel="noopener noreferrer"
      class={cn(css.card, className)}
    >
      <div class={css.slider}>
        <div class={css.imageContainer}>
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`${name} - ${index + 1}`}
              class={cn(css.slide, { [css.active]: index === currentIndex })}
            />
          ))}
        </div>

        <button
          class={cn(css.navButton, css.prev)}
          onClick={goToPrev}
          aria-label="Previous image"
        >
          &#8249;
        </button>
        <button
          class={cn(css.navButton, css.next)}
          onClick={goToNext}
          aria-label="Next image"
        >
          &#8250;
        </button>

        <div class={css.indicators}>
          {images.map((_, index) => (
            <button
              key={index}
              class={cn(css.indicator, {
                [css.activeIndicator]: index === currentIndex,
              })}
              onClick={goToIndex(index)}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <div class={css.textWrapper}>
        <div class={css.name}>{name}</div>
        <div class={css.description}>{description}</div>
      </div>
    </a>
  );
};
