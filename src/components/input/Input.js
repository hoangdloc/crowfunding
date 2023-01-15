import PropTypes from 'prop-types';
import React from 'react';
import { withErrorBoundary } from 'react-error-boundary';
import { useController } from 'react-hook-form';

import classNames from '../../utils/classNames';
import ErrorComponent from '../common/ErrorComponent';

const Input = (props) => {
  const {
    control,
    name,
    type = 'text',
    error = '',
    placeholder,
    children,
    ...rest
  } = props;
  const { field } = useController({
    control,
    name,
    defaultValue: ''
  });

  return (
    <div className="relative">
      <input
        id={name}
        type={type}
        placeholder={error.length > 0 ? null : placeholder}
        className={classNames(
          'w-full px-6 py-4 text-sm font-medium border rounded-xl placeholder:text-text4 dark:placeholder:text-text2 dark:text-white bg-transparent',
          error.length > 0
            ? 'border-error text-error caret-transparent'
            : 'border-strock text-text1 dark:border-dark-stroke',
          children ? 'pr-16' : null
        )}
        {...field}
        {...rest}
      />
      {error.length > 0 && (
        <span className="absolute text-sm font-medium pointer-events-none left-6 text-error top-2/4 -translate-y-2/4 error-input">
          {error}
        </span>
      )}
      {children && (
        <span className="absolute cursor-pointer select-none right-6 top-2/4 -translate-y-2/4">
          {children}
        </span>
      )}
    </div>
  );
};

Input.propTypes = {
  control: PropTypes.any.isRequired,
  name: PropTypes.string,
  type: PropTypes.string,
  error: PropTypes.string,
  placeholder: PropTypes.string,
  children: PropTypes.node
};

export default withErrorBoundary(Input, {
  FallbackComponent: ErrorComponent
});
