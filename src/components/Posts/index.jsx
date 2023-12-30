/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useRef } from 'react';
import { PostsContext } from '../../contexts/PostsProvider/context';
import { CounterContext } from '../../contexts/CounterProvider/context';
import { loadPosts } from '../../contexts/PostsProvider/actions';
import {
  incrementCounter,
  decrementCounter,
} from '../../contexts/CounterProvider/actions';

export const Posts = () => {
  const isMounted = useRef(false);

  const postsContext = useContext(PostsContext);
  const { postsState, postsDispatch } = postsContext;

  const counterContext = useContext(CounterContext);
  const { counterState, counterDispatch } = counterContext;

  useEffect(() => {
    loadPosts(postsDispatch).then((dispatch) => {
      if (isMounted) {
        dispatch();
      }
    });

    return () => (isMounted.current = false);
  }, [postsDispatch]);

  console.log(postsState);

  return (
    <div>
      <button onClick={() => incrementCounter(counterDispatch)}>
        {counterState.counter}+
      </button>
      <button onClick={() => decrementCounter(counterDispatch)}>
        {counterState.counter}-
      </button>
      <h1>POSTS</h1>
      {postsState.loading && (
        <p>
          <strong>Posts carregando...</strong>
        </p>
      )}
      {postsState.posts.map((posts) => {
        return <p key={posts.id}>{posts.title}</p>;
      })}
    </div>
  );
};
