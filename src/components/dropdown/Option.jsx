import React from 'react';

import { useDropdown } from './DropdownContext';

const Option = (props) => {
  const { onClick } = props;
  const { setShow } = useDropdown();

  const handleClick = () => {
    onClick && onClick();
    setShow(false);
  };

  return (
    <div
      className="flex items-center justify-between px-5 py-4 text-sm transition-all cursor-pointer hover:text-primary"
      onClick={handleClick}
    >
      {props.children}
    </div>
  );
};

export default Option;
