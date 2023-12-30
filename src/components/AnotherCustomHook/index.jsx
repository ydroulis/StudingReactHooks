/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useFetch } from '../../hooks/useFetch';

export const AnotherCustomHook = () => {
  // const [id, setId] = useState('');
  // const [result, loading] = useFetch(
  //   'https://jsonplaceholder.typicode.com/posts/' + id,
  // {
  //   method: 'GET',
  //   headers: {
  //     abc: 123,
  //   },
  // },
  // );

  const [result, loading] = useFetch(
    'https://jsonplaceholder.typicode.com/posts ',
  );

  // const handleClick = (id) => {
  //   setId(id);
  // };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!loading && result) {
    console.log(result);
    // return (
    //   <div>
    //     {result?.length > 0 ? (
    //       result.map((post) => (
    //         <p key={post.id} onClick={() => handleClick(post.id)}>
    //           {post.title}
    //         </p>
    //       ))
    //     ) : (
    //       <p onClick={() => handleClick('')}>{result.title}</p>
    //     )}
    //   </div>
    // );
  }

  return <div>oi</div>;
};
