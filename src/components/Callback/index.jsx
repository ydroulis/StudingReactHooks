import Proptypes from 'prop-types';
import React, { useCallback, useState } from 'react';

const Button = React.memo(function Button({ incrementButton }) {
  console.log('Filho renderizado');

  return <button onClick={() => incrementButton(10)}>+</button>;
});

export const Callback = () => {
  const [counter, setCounter] = useState(0);

  console.log('Pai renderizado');

  const incrementCounter = useCallback((num) => {
    setCounter((prev) => prev + num);
  }, []);

  return (
    <div>
      <p>useCallback</p>
      <h1>C1: {counter}</h1>
      <Button incrementButton={incrementCounter} />
    </div>
  );
};

Button.propTypes = {
  incrementButton: Proptypes.func.isRequired,
};
