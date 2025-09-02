import { useEffect } from 'preact/hooks';

export const useScrollHeight = (onBottomCallback: () => void) => {
  useEffect(() => {
    const fn = () => {
      const scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;

      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = window.innerHeight;

      if (scrollTop + clientHeight >= scrollHeight - 50) {
        onBottomCallback();
        window.removeEventListener('scroll', fn);
      }
    };

    window.addEventListener('scroll', fn, { passive: true });
    fn();

    return () => {
      window.removeEventListener('scroll', fn);
    };
  }, []);
};
