import axios from 'axios';
import React from 'react';
import { toast } from 'react-toastify';

import { imgAPI } from '../../config/config';

const ImageUpload = ({ onChange = () => {}, name = '' }) => {
  const handleUploadImage = async (e) => {
    const file = e.target.files;
    if (!file) return;
    const bodyFormData = new FormData();
    bodyFormData.append('image', file[0]);
    const response = await axios({
      method: 'post',
      url: imgAPI,
      data: bodyFormData,
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    const imageData = response.data.data;
    if (!imageData) {
      toast.error('Cannot upload image to imgBB');
      return;
    }
    const imageObj = {
      medium: imageData.medium.url,
      thumb: imageData.thumb.url,
      url: imageData.url
    };
    onChange(name, imageObj);
  };

  return (
    <label className="w-full rounded-xl border border-gray-200 border-dashed h-[200px] cursor-pointer flex items-center justify-center">
      <input
        type="file"
        className="hidden"
        onChange={handleUploadImage}
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
        />
      </svg>
    </label>
  );
};

export default ImageUpload;
