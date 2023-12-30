import React from 'react';
import { AppContext } from '../../contexts/AppContext';
import { Div } from './Div';

export const Context = () => {
  return (
    <AppContext>
      <Div />
    </AppContext>
  );
};
