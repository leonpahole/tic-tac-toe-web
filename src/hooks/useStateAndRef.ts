import { useCallback, useRef, useState } from "react";

export const useStateAndRef = <T>(
  initialValue: T
): [T, React.MutableRefObject<T>, (v: T) => void] => {
  const [val, setVal] = useState<T>(initialValue);
  const ref = useRef<T>(initialValue);

  const set = useCallback((newVal: T) => {
    setVal(newVal);
    ref.current = newVal;
  }, []);

  return [val, ref, set];
};
