import { useReducer } from 'react';
import Proptypes from 'prop-types';
import { reducer } from './reducer';
import { globalState } from './data';
import { Context } from './context';

export const AppReducerContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, globalState);
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

AppReducerContext.propTypes = {
  children: Proptypes.node,
};
