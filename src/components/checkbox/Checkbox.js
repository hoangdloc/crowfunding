import React from 'react';

import classNames from '../../utils/classNames';

const Checkbox = ({
  checked = false,
  onClick = () => {},
  name = '',
  children
}) => {
  return (
    <div className="flex items-start gap-x-5">
      <div
        className={classNames(
          'inline-flex items-center justify-center text-white w-5 h-5 border rounded cursor-pointer',
          checked
            ? 'bg-primary border-primary'
            : 'border-strock dark:border-text3'
        )}
        onClick={onClick}
      >
        <input
          id={name}
          type="checkbox"
          className="hidden"
          name={name}
          onChange={() => {}}
        />
        <span className={classNames(checked ? null : 'opacity-0 invisible')}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </div>
      {children && (
        <div
          className="cursor-pointer"
          onClick={onClick}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default Checkbox;
