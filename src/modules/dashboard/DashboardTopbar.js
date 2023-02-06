import React from 'react';
import { Link } from 'react-router-dom';

import { Button } from '../../components/button';
import DashboardFund from './DashboardFund';
import DashboardSearch from './DashboardSearch';

const DashboardTopbar = () => {
  return (
    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center flex-1 gap-x-10">
        <Link
          to="/"
          className="inline-block"
        >
          <img
            srcSet="/logo.png 2x"
            alt="crowfunding-app"
          />
        </Link>
        <div className="max-w-[458px] w-full">
          <DashboardSearch />
        </div>
      </div>
      <div className="flex items-center justify-end flex-1 gap-x-10">
        <DashboardFund />
        <Button
          type="button"
          className="px-7"
          kind="secondary"
          href="/start-campaign"
        >
          Start a campaign
        </Button>
        <img
          srcSet="/logo.png 2x"
          alt="crowfunding-app"
          className="object-cover rounded-full"
        />
      </div>
    </div>
  );
};

export default DashboardTopbar;
