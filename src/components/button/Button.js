import PropTypes from 'prop-types';
import React from 'react';
import { withErrorBoundary } from 'react-error-boundary';
import { Link } from 'react-router-dom';

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
  let defaultClassName =
    'flex items-center justify-center p-4 text-base font-semibold rounded-xl min-h-[56px]';

  switch (rest.kind) {
    case 'primary':
      defaultClassName = defaultClassName + ' bg-primary text-white';
      break;
    case 'secondary':
      defaultClassName = defaultClassName + ' bg-secondary text-white';
      break;
    case 'ghost':
      defaultClassName =
        defaultClassName + ' bg-secondary bg-opacity-10 text-secondary';
      break;
    default:
      break;
  }

  if (rest.href)
    return (
      <Link
        className={classNames(defaultClassName, className)}
        to={rest.href}
      >
        {child}
      </Link>
    );

  return (
    <button
      className={classNames(
        defaultClassName,
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
  type: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  isLoading: PropTypes.bool,
  href: PropTypes.string,
  kind: PropTypes.oneOf(['primary', 'secondary', 'ghost'])
};

export default withErrorBoundary(Button, {
  FallbackComponent: ErrorComponent
});
