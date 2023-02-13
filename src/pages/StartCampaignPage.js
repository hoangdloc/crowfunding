import React, { Fragment, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import CampaignAddNew from '../modules/campaign/CampaignAddNew';

const StartCampaignPage = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/sign-in');
    }
  }, [navigate, user]);

  return (
    <Fragment>
      <CampaignAddNew />
    </Fragment>
  );
};

export default StartCampaignPage;
