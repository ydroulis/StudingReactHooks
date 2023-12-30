import React, { Suspense, lazy, useState } from 'react';
// import LazyComponent from './lazy-component';

const loadComponent = () => import('./lazy-component');
const LazyComponent = lazy(loadComponent);

export const CodeSplitting = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <button
        onMouseOver={loadComponent}
        onClick={() => setShow((prev) => !prev)}
      >
        {show ? 'Hide LC' : 'Show LC'}
      </button>

      <Suspense fallback={<p>Carregando..</p>}>
        {show && <LazyComponent />}
      </Suspense>
    </>
  );
};
