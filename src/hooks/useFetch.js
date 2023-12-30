/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from 'react';

const isEqual = (objA, objB) => {
  return JSON.stringify(objA) === JSON.stringify(objB);
};

export const useFetch = (url, options) => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);

  const optionsRef = useRef(options);
  const urlRef = useRef(url);

  // useEffect(() => {
  //   let change = false;

  //   if (!isEqual(url, urlRef.current)) {
  //     urlRef.current = url;
  //     change = true;
  //   }

  //   if (!isEqual(options, optionsRef.current)) {
  //     optionsRef.current = options;
  //     change = true;
  //   }

  //   if (change) {
  //     setShouldLoad((prev) => !prev);
  //   }
  // }, [url, options]);

  // useEffect(() => {
  //   let wait = false;

  //   setLoading(true);

  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(urlRef.current, optionsRef.current);
  //       const jsonResult = await response.json();
  //       if (!wait) {
  //         setResult(jsonResult);
  //         setLoading(false);
  //       }
  //     } catch (e) {
  //       if (!wait) {
  //         setLoading(false);
  //       }
  //       throw e;
  //     }
  //   };

  //   fetchData();

  //   return () => (wait = true);
  // }, [shouldLoad]);

  useEffect(() => {
    let change = false;

    if (!isEqual(urlRef.current, url)) {
      urlRef.current = url;
      change = true;
    }

    if (!isEqual(optionsRef.current, options)) {
      optionsRef.current = options;
      change = true;
    }

    if (change) {
      setShouldLoad((prev) => !prev);
    }
  }, [url, options]);

  useEffect(() => {
    let wait = false;

    setLoading(true);

    const fetchData = async () => {
      try {
        const response = await fetch(urlRef.current, optionsRef.current);
        const jsonResult = await response.json();
        if (!wait) {
          setResult(jsonResult);
          setLoading(false);
        }
      } catch (e) {
        if (!wait) setLoading(false);
        throw e;
      }
    };

    fetchData();

    return () => (wait = true);
  }, [shouldLoad]);

  return [result, loading];
};
