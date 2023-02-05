import React from 'react';

import { defaultImage } from '../../../constants/global';

const CampImage = ({ className = 'h-[158px]', image = defaultImage }) => {
  return (
    <div className={className}>
      <img
        src={image}
        alt="Fund"
        className="object-cover w-full h-full rounded-2xl"
      />
    </div>
  );
};

export default CampImage;
