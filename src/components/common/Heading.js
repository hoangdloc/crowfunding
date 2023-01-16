import React from 'react';
import { withErrorBoundary } from 'react-error-boundary';

import classNames from '../../utils/classNames';
import ErrorComponent from './ErrorComponent';

const Heading = ({ children, className = '', number = null }) => {
  return (
    <h2
      className={classNames('text-lg font-semibold text-text1 mb-5', className)}
    >
      {children}{' '}
      {number && <span className="text-secondary">{`(${number})`}</span>}
    </h2>
  );
};

export default withErrorBoundary(Heading, {
  FallbackComponent: ErrorComponent
});
