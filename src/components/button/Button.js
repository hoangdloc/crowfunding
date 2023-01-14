import PropTypes from 'prop-types';
import React from 'react';

const Button = ({ type = 'button', children, className }) => {
  return (
    <button
      className={`flex items-center justify-center p-4 text-base font-semibold rounded-xl text-white ${className}`}
      type={type}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.node,
  className: PropTypes.string
};

export default Button;
