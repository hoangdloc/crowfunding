import React from 'react';

import { defaultImage } from '../../../constants/global';

const CampAuthor = ({ image = defaultImage, author = 'My Duyen' }) => {
  return (
    <div className="flex items-center gap-x-3">
      <img
        src={image}
        alt="User"
        className="object-cover w-8 h-8 rounded-full"
      />
      <p className="text-xs text-text3">
        By <strong className="font-semibold text-text2">{author}</strong>
      </p>
    </div>
  );
};

export default CampAuthor;
