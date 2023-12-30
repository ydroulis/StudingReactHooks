import { AppReducerContext } from '../../contexts/AppReducerContext';
import { H1 } from './H1';

export const Reducer = () => {
  return (
    <AppReducerContext>
      <div>
        <H1 />
      </div>
    </AppReducerContext>
  );
};
