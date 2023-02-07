import React from 'react';

import { Button } from '../components/button';
import Heading from '../components/common/Heading';
import LayoutDashboard from '../layouts/LayoutDashboard';
import CampaignFeature from '../modules/campaign/CampaignFeature';
import CampaignGrid from '../modules/campaign/CampaignGrid';

const CampaignPage = () => {
  return (
    <LayoutDashboard>
      <div className="flex items-center justify-between px-10 py-8 mb-10 bg-white rounded-3xl">
        <div className="flex items-start gap-x-6">
          <div className="flex items-center justify-center text-white rounded-full w-14 h-14 bg-secondary bg-opacity-60">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="flex-1">
            <h1 className="text-[22px] font-semibold mb-2">
              Create Your Campaign
            </h1>
            <p className="mb-2 text-sm text-text3">
              Jump right into our editor and create your first Virtue campaign!
            </p>
            <a
              href="/"
              className="text-sm text-primary"
            >
              Need any help? Learn more...
            </a>
          </div>
        </div>
        <Button
          kind="ghost"
          type="button"
          className="px-8"
          href="/start-campaign"
        >
          Create campaign
        </Button>
      </div>
      <Heading number={4}>Your campaign</Heading>
      <CampaignGrid type="secondary">
        <CampaignFeature />
        <CampaignFeature />
        <CampaignFeature />
        <CampaignFeature />
      </CampaignGrid>
      <div className="mt-10"></div>
      <Button
        kind="ghost"
        className="px-8 mx-auto"
      >
        <span>See more</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path
            fillRule="evenodd"
            d="M12 5.25a.75.75 0 01.75.75v5.25H18a.75.75 0 010 1.5h-5.25V18a.75.75 0 01-1.5 0v-5.25H6a.75.75 0 010-1.5h5.25V6a.75.75 0 01.75-.75z"
            clipRule="evenodd"
          />
        </svg>
      </Button>
    </LayoutDashboard>
  );
};

export default CampaignPage;
