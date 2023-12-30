import React, { useEffect } from 'react';
import { useState } from 'react';

const eventFn = () => {
  console.log('h1 clicado');
};

export const Effect = () => {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  // componentDidUpdate - executa toda vez que o componente atualiza

  // useEffect(() => {
  //   console.log('componentDidUpdate');
  // });

  //componentDidMount - executa 1x quando componente é montado

  useEffect(() => {
    console.log('componentDidMount');
  }, []);

  //Com dependência - executa toda vez que uma dependência específica é atualizada

  // useEffect(() => {
  //   console.log('Contador 1 mudou para ', counter);
  // }, [counter]);

  // useEffect(() => {
  //   console.log('C1 ', counter, 'C2', counter2);
  //   setCounter(counter + 1); Loop infinito
  // }, [counter, counter2]);

  // componentWillUnmount

  useEffect(() => {
    document.querySelector('h1')?.addEventListener('click', eventFn);

    return () => {
      document.querySelector('h1')?.removeEventListener('click', eventFn);
    };
  }, []);

  return (
    <>
      <p>useEffect</p>
      <h1>
        Counter 1: {counter} Counter 2: {counter2}
      </h1>

      <button onClick={() => setCounter((prev) => prev + 1)}>+</button>
      <button onClick={() => setCounter2((prev) => prev + 1)}>+ (2)</button>
    </>
  );
};
