import PropTypes from 'prop-types';
import React from 'react';
import { withErrorBoundary } from 'react-error-boundary';

import ErrorComponent from '../common/ErrorComponent';

const ButtonGoogle = ({ text = 'Sign up with google', onClick = () => {} }) => {
  return (
    <button
      className="flex items-center justify-center w-full py-4 mb-5 text-base font-semibold border gap-x-3 border-strock rounded-xl text-text2 dark:text-white dark:border-dark-stroke"
      onClick={onClick}
    >
      <img
        srcSet="/icon/google.png 2x"
        alt="icon-google"
      />
      <span>{text}</span>
    </button>
  );
};

ButtonGoogle.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func
};

export default withErrorBoundary(ButtonGoogle, {
  FallbackComponent: ErrorComponent
});
