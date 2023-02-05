import React from 'react';
import { v4 } from 'uuid';

import Gap from '../components/common/Gap';
import Heading from '../components/common/Heading';
import LayoutDashboard from '../layouts/LayoutDashboard';
import CampaignFeature from '../modules/campaign/CampaignFeature';
import CampaignGrid from '../modules/campaign/CampaignGrid';
import CampaignItem from '../modules/campaign/CampaignItem';

const DashboardPage = () => {
  return (
    <LayoutDashboard>
      <Heading number={4}>Your campaign</Heading>
      <CampaignFeature />
      <Gap />
      <Heading>Popular campaign</Heading>
      <CampaignGrid>
        {Array(4)
          .fill(0)
          .map((item) => (
            <CampaignItem key={v4()} />
          ))}
      </CampaignGrid>
      <Gap />
      <Heading>Recent campaign</Heading>
      <CampaignGrid>
        {Array(4)
          .fill(0)
          .map((item) => (
            <CampaignItem key={v4()} />
          ))}
      </CampaignGrid>
    </LayoutDashboard>
  );
};

export default DashboardPage;
