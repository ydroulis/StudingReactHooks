import { useContext } from 'react';
import { GlobalContext } from '../../../contexts/AppContext';

export const H1 = () => {
  const { state } = useContext(GlobalContext);
  return (
    <h1>
      {state.title} {state.counter}
    </h1>
  );
};
