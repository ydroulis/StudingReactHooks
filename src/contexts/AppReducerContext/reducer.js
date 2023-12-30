import { types } from './types';

export const reducer = (state, action) => {
  switch (action.type) {
    case types.CHANGE_TITLE: {
      console.log('CHANGE_TITLE');
      return { ...state, title: action.payload };
    }
  }
  return { ...state };
};
