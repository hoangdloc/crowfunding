import React from 'react';
import { v4 } from 'uuid';

import Heading from '../components/common/Heading';
import LayoutDashboard from '../layouts/LayoutDashboard';
import CampaignGrid from '../modules/campaign/CampaignGrid';
import CampaignItem from '../modules/campaign/CampaignItem';

const DashboardPage = () => {
  return (
    <LayoutDashboard>
      <Heading number={4}>Your campaign</Heading>
      <Heading>Popular campaign</Heading>
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
