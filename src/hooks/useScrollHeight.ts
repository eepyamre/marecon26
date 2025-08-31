import { useEffect } from 'preact/hooks';

export const useScrollHeight = (onBottomCallback: () => void) => {
  useEffect(() => {
    const fn = () => {
      const { scrollTop, scrollHeight, clientHeight } =
        document.documentElement;

      if (scrollTop + clientHeight >= scrollHeight - 50) {
        onBottomCallback();
        window.removeEventListener('scroll', fn);
      }
    };
    addEventListener('scroll', fn);
    fn();
    return () => {
      removeEventListener('scroll', fn);
    };
  }, []);
};
