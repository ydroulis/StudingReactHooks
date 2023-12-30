import React, { useEffect, useState } from 'react';

const s = {
  style: {
    fontSize: '60px',
  },
};

export const ItWillThrowError = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (counter > 3) {
      throw new Error('Deu ruim');
    }
  }, [counter]);

  return (
    <button onClick={() => setCounter((prev) => prev + 1)} {...s}>
      Click to increase {counter}
    </button>
  );
};
