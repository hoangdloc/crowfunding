import PropTypes from 'prop-types';
import React from 'react';
import { useController } from 'react-hook-form';

const Input = (props) => {
  const { control, name, type = 'text', ...rest } = props;
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
        className="w-full px-6 py-4 text-sm font-medium border border-strock rounded-xl text-text1 placeholder:text-text4"
        {...field}
        {...rest}
      />
    </div>
  );
};

Input.propTypes = {
  control: PropTypes.any.isRequired,
  name: PropTypes.string,
  type: PropTypes.string
};

export default Input;
