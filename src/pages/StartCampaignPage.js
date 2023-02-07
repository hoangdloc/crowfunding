import React from 'react';

import LayoutDashboard from '../layouts/LayoutDashboard';
import CampaignAddNew from '../modules/campaign/CampaignAddNew';

const StartCampaignPage = () => {
  return (
    <LayoutDashboard>
      <CampaignAddNew />
    </LayoutDashboard>
  );
};

export default StartCampaignPage;
