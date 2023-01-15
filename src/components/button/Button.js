import PropTypes from 'prop-types';
import React from 'react';
import { withErrorBoundary } from 'react-error-boundary';

import classNames from '../../utils/classNames';
import ErrorComponent from '../common/ErrorComponent';

const Button = ({
  type = 'button',
  children,
  className,
  isLoading = false,
  ...rest
}) => {
  const child = isLoading ? (
    <div className="w-10 h-10 border-4 border-white rounded-full animate-spin border-y-transparent"></div>
  ) : (
    children
  );

  return (
    <button
      className={classNames(
        'flex items-center justify-center p-4 text-base font-semibold rounded-xl text-white min-h-[56px]',
        isLoading ? 'opacity-50 cursor-not-allowed pointer-events-none' : null,
        className
      )}
      type={type}
      {...rest}
    >
      {child}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
  isLoading: PropTypes.bool
};

export default withErrorBoundary(Button, {
  FallbackComponent: ErrorComponent
});
