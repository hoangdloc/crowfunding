import React, { Fragment, useEffect } from 'react';
import { v4 } from 'uuid';

import Gap from '../components/common/Gap';
import Heading from '../components/common/Heading';
import useAxiosPrivate from '../hooks/useAxiosPrivate';
import CampaignFeature from '../modules/campaign/CampaignFeature';
import CampaignGrid from '../modules/campaign/CampaignGrid';
import CampaignItem from '../modules/campaign/CampaignItem';

const DashboardPage = () => {
  const axiosPrivate = useAxiosPrivate();

  useEffect(() => {
    async function fetchCampaigns() {
      try {
        const response = await axiosPrivate.get('/api/campaigns');
      } catch (error) {
        console.error(error);
      }
    }
    fetchCampaigns();
  }, [axiosPrivate]);

  return (
    <Fragment>
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
    </Fragment>
  );
};

export default DashboardPage;
