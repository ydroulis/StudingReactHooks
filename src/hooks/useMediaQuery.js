import { useDebugValue, useEffect, useState } from 'react';

export const useMediaQuery = (queryValue, initialValue = false) => {
  const [match, setMatch] = useState(initialValue);

  useDebugValue(`Query: ${queryValue}`, (name) => {
    return name + ' modificado';
  });

  useEffect(() => {
    let isMounted = true;
    const matchMedia = window.matchMedia(queryValue);

    const handleChange = () => {
      if (!isMounted) return;
      setMatch(!!matchMedia.matches);
    };

    matchMedia.addEventListener('change', handleChange);

    return () => {
      isMounted = false;
      matchMedia.removeEventListener('change', handleChange);
    };
  }, [queryValue]);

  return match;
};
