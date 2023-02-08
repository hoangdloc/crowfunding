import React from 'react';

import { defaultImage } from '../../constants/global';
import CampTitle from './parts/CampTitle';

const CampaignPerk = () => {
  return (
    <div className="bg-white shadow-1 rounded-xl">
      <img
        src={defaultImage}
        alt="Sample"
        className="h-[232px] w-full object-cover rounded-xl"
      />
      <div className="p-5">
        <span className="inline-block py-1 px-3 mb-5 rounded-sm bg-secondary text-white font-medium text-xs">
          Featured
        </span>
        <CampTitle className="text-xl mb-1 font-semibold">
          Special One Camera
        </CampTitle>
        <div className="flex items-center gap-x-3 mb-4">
          <span className="text-text1 font-bold text-xl">$2,7424 USD</span>
          <span className="text-sm text-error line-through font-medium">
            $1,504 USD
          </span>
          <span className="text-sm text-error font-medium">(12% OFF)</span>
        </div>
        <div className="flex flex-col gap-y-1 mb-4">
          <strong className="font-medium">Estimated Shipping</strong>
          <span className="text-text2">October 2022</span>
        </div>
        <p className="text-text2 mb-4">
          <strong className="text-text1 font-medium">05</strong> claimed
        </p>
        <p className="text-text2">Ships worldwide</p>
      </div>
    </div>
  );
};

export default CampaignPerk;
