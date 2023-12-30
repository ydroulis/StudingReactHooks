import { useContext } from 'react';
import { GlobalContext } from '../../../contexts/AppContext';

export const P = () => {
  const { state, setState } = useContext(GlobalContext);
  return (
    <p
      onClick={() =>
        setState((prev) => ({ ...prev, counter: prev.counter + 1 }))
      }
    >
      {state.body}
    </p>
  );
};
