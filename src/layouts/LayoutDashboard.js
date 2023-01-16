import React from 'react';
import { ErrorBoundary, withErrorBoundary } from 'react-error-boundary';

import DashboardSidebar from '../modules/dashboard/DashboardSidebar';
import DashboardTopbar from '../modules/dashboard/DashboardTopbar';

const LayoutDashboard = ({ children }) => {
  return (
    <div className="min-h-screen p-10 bg-lite">
      <DashboardTopbar />
      <div className="flex items-start gap-x-10">
        <DashboardSidebar />
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
};

export default withErrorBoundary(LayoutDashboard, {
  FallbackComponent: ErrorBoundary
});
