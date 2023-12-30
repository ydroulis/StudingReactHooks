import React from 'react';
import { ItWillThrowError } from './components/ItWillThrowError';
import { ErrorBoundary } from './components/ErrorBoundary';

export const ErrorBoundariesExample = () => {
  return (
    <div>
      <ErrorBoundary>
        <ItWillThrowError />
      </ErrorBoundary>
    </div>
  );
};
