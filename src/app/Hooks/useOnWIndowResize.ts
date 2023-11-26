import { useEffect, useRef, useState } from 'react';
import { debounce } from '../utils/debounce';

interface Props {
  threshold?: number;
}

export const useWindowResizeThreshold = ({ threshold = 1015 }: Props) => {
  const [isMobileSize, setIsMobileSize] = useState(
    window.innerWidth <= threshold
  );
  const prevWidth = useRef(window.innerWidth);
  const debouncedSetMobile = debounce(setIsMobileSize, 200);

  useEffect(() => {
    const handleResize = () => {
      const currWidth = window.innerWidth;
      if (currWidth <= threshold && prevWidth.current > threshold) {
        debouncedSetMobile(true);
      } else if (currWidth > threshold && prevWidth.current <= threshold) {
        debouncedSetMobile(false);
      }
      prevWidth.current = currWidth;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return isMobileSize;
};
