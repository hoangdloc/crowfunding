import React, { Fragment } from 'react';

import { Button } from '../../components/button';
import CampaignGrid from './CampaignGrid';
import CampaignItem from './CampaignItem';
import CampaignPerk from './CampaignPerk';
import CampaignSupport from './CampaignSupport';
import CampCategory from './parts/CampCategory';
import CampDesc from './parts/CampDesc';
import CampImage from './parts/CampImage';
import CampMeta from './parts/CampMeta';
import CampTitle from './parts/CampTitle';
import CampViewAuthor from './parts/CampViewAuthor';

const CampaignView = () => {
  return (
    <Fragment>
      <div
        className="h-[140px] rounded-3xl bg-cover bg-no-repeat bg-center bg-opacity-40 flex items-center justify-center text-white text-[40px] font-bold mb-10"
        style={{
          backgroundImage: `linear-gradient(
            179.14deg,
            rgba(32, 18, 63, 0) -7.14%,
            #000000 87.01%
          ), url(https://source.unsplash.com/random)`
        }}
      >
        <h1>Education</h1>
      </div>
      <div className="flex items-start gap-x-10 w-full max-w-[1066px]">
        <div className="flex-1">
          <CampImage className="h-[398px] mb-8" />
          <div className="flex justify-center gap-x-5">
            {Array(4)
              .fill(0)
              .map((item, index) => (
                <img
                  key={index}
                  src="https://source.unsplash.com/random"
                  alt="Figure"
                  className="w-[89px] h-[70px] rounded-lg object-cover"
                />
              ))}
          </div>
        </div>
        <div className="flex-1 max-w-[443px]">
          <CampCategory
            text="Architecture"
            className="text-sm"
          />
          <CampTitle className="mb-4 text-xl font-bold">
            Remake - We make architecture exhibition
          </CampTitle>
          <CampDesc className="text-sm mb-6">
            Remake - We Make: an exhibition about architecture's social agency
            in the face of urbanisation
          </CampDesc>
          <CampViewAuthor />
          <div className="w-full h-[5px] rounded-full bg-[#EFEFEF] mb-6">
            <div className="h-full w-2/4 rounded-full bg-primary"></div>
          </div>
          <div className="flex items-start justify-between gap-x-5 mb-4">
            <CampMeta size="big" />
            <CampMeta size="big" />
            <CampMeta size="big" />
          </div>
          <Button
            className="w-full"
            kind="primary"
          >
            Back this project
          </Button>
        </div>
      </div>
      <div className="flex items-center justify-between mt-[100px] bg-white p-5 border-b border-b-slate-100 mb-6">
        <div className="flex items-center gap-x-14 text-sm font-medium text-text3">
          <span className="cursor-pointer text-secondary">Campaign</span>
          <span className="cursor-pointer text-text3">Risks</span>
          <span className="cursor-pointer text-text3">FAQ</span>
          <span className="cursor-pointer text-text3">Updates</span>
          <span className="cursor-pointer text-text3">Comments</span>
        </div>
        <Button kind="primary">Back this project</Button>
      </div>
      <div className="grid gap-x-[124px] grid-cols-[1.3fr,_1fr] mb-[70px]">
        <div></div>
        <div className="flex flex-col gap-y-[60px]">
          <CampaignSupport />
          <div className="flex flex-col gap-y-[30px]">
            <CampaignPerk />
            <CampaignPerk />
            <CampaignPerk />
          </div>
        </div>
      </div>
      <h2 className="mb-10 text-xl font-semibold">
        You also may be interested in
      </h2>
      <CampaignGrid>
        <CampaignItem />
        <CampaignItem />
        <CampaignItem />
        <CampaignItem />
      </CampaignGrid>
    </Fragment>
  );
};

export default CampaignView;
