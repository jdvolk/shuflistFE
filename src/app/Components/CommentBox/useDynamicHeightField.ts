/* eslint-disable no-param-reassign */
import { useEffect } from 'react';

export const useDynamicHeightField = (element: any, value: any) => {
  useEffect(() => {
    if (!element) return;

    element.current.style.height = 'auto';
    element.current.style.height = `${element.current.scrollHeight}px`;
  }, [element, value]);
};


