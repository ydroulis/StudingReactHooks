import React, { useContext, useRef } from 'react';
import { Context } from '../../../contexts/AppReducerContext/context';
import { types } from '../../../contexts/AppReducerContext/types';

export const H1 = () => {
  const { state, dispatch } = useContext(Context);
  const input = useRef();

  return (
    <>
      <h1
        onClick={() =>
          dispatch({
            type: types.CHANGE_TITLE,
            payload: input.current.value,
          })
        }
      >
        {state.title}
      </h1>
      <input type="text" ref={input} />
    </>
  );
};
