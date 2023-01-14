import PropTypes from 'prop-types';
import React from 'react';

const Label = (props) => {
  const { children, htmlFor = '', className = '' } = props;

  return (
    <label
      htmlFor={htmlFor}
      className={`inline-block text-sm font-medium cursor-pointer text-text2 ${className}`}
    >
      {children}
    </label>
  );
};

Label.propTypes = {
  children: PropTypes.node,
  htmlFor: PropTypes.string,
  className: PropTypes.string
};

export default Label;
