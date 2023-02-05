import React from 'react';

import CampCategory from './parts/CampCategory';
import CampDesc from './parts/CampDesc';
import CampImage from './parts/CampImage';
import CampMeta from './parts/CampMeta';
import CampTitle from './parts/CampTitle';

const CampaignFeature = () => {
  return (
    <div className="flex items-center gap-x-[30px] w-full max-w-[1048px]">
      <CampImage className="h-[266px] flex-1" />
      <div className="flex-1 max-w-[435px]">
        <CampCategory
          text="Architecture"
          className="text-sm"
        />
        <CampTitle className="mb-4 text-xl font-bold">
          Remake - We make architecture exhibition
        </CampTitle>
        <CampDesc className="text-sm mb-6">
          Remake - We Make: an exhibition about architecture's social agency in
          the face of urbanisation
        </CampDesc>
        <div className="w-full h-[5px] rounded-full bg-[#EFEFEF] mb-6">
          <div className="h-full w-2/4 rounded-full bg-primary"></div>
        </div>
        <div className="flex items-start justify-between gap-x-5">
          <CampMeta size="big" />
          <CampMeta size="big" />
          <CampMeta size="big" />
        </div>
      </div>
    </div>
  );
};

export default CampaignFeature;
