import React from 'react';
import { Link } from 'react-router-dom';

import CampAuthor from './parts/CampAuthor';
import CampCategory from './parts/CampCategory';
import CampDesc from './parts/CampDesc';
import CampImage from './parts/CampImage';
import CampMeta from './parts/CampMeta';
import CampTitle from './parts/CampTitle';

const CampaignItem = () => {
  return (
    <div>
      <CampImage />
      <div className="px-5 py-4">
        <CampCategory />
        <CampTitle>Powered Kits Learning Boxes</CampTitle>
        <CampDesc>
          Fun, durable and reusable boxes with eco-friendly options.
        </CampDesc>
        <div className="flex items-start justify-between mb-5 gap-x-5">
          <CampMeta />
          <CampMeta
            amount="173"
            text="Total backers"
          />
        </div>
        <CampAuthor />
      </div>
    </div>
  );
};

export default CampaignItem;
