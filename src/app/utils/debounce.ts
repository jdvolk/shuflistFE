type AnyFunction<T extends unknown[] = any> = (...args: T) => unknown;

export const debounce = <T extends AnyFunction>(func: T, timeout = 300) => {
  let timer: ReturnType<typeof setTimeout> | undefined;

  return (...args: Parameters<T>): void => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      func(...Array.from(args));
    }, timeout);
  };
};
