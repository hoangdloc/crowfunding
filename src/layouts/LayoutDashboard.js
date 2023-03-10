import React from 'react';
import { ErrorBoundary, withErrorBoundary } from 'react-error-boundary';
import { Outlet } from 'react-router-dom';

import Overlay from '../components/common/Overlay';
import DashboardSidebar from '../modules/dashboard/DashboardSidebar';
import DashboardTopbar from '../modules/dashboard/DashboardTopbar';

const LayoutDashboard = () => {
  return (
    <div className="min-h-screen p-10 bg-lite">
      <Overlay />
      <DashboardTopbar />
      <div className="flex items-start gap-x-10">
        <DashboardSidebar />
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default withErrorBoundary(LayoutDashboard, {
  FallbackComponent: ErrorBoundary
});
