import React from 'react';
import { useController } from 'react-hook-form';

const Textarea = (props) => {
  const { control, name, placeholder, ...rest } = props;
  const { field } = useController({
    control,
    name,
    defaultValue: ''
  });

  return (
    <textarea
      className="min-h-[140px] w-full px-6 py-4 text-sm font-medium bg-transparent border resize-none rounded-xl placeholder:text-text4 dark:placeholder:text-text2 dark:text-white outline-none"
      placeholder={placeholder}
      {...field}
      {...rest}
    ></textarea>
  );
};

export default Textarea;
