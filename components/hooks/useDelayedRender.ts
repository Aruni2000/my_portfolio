import { useState, useEffect } from 'react';

export function useDelayedRender(delay: number = 100) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  return show;
}
