import React from 'react';
import { useAsync } from '../../hooks/useAsync';

const fetchData = async () => {
  const data = await fetch('https://jsonplaceholder.typicode.com/posts');
  const json = await data.json();
  return json;
};

export const OtherCustomHook = () => {
  const [reFetchData, result, error, status] = useAsync(fetchData, true);

  return <pre>{JSON.stringify(result, null, 2)}</pre>;
};
