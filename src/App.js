import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const SignUpPage = lazy(async () => await import('./pages/SignUpPage'));
const SignInPage = lazy(async () => await import('./pages/SignInPage'));
const DashboardPage = lazy(async () => await import('./pages/DashboardPage'));
const CampaignPage = lazy(async () => await import('./pages/CampaignPage'));
const StartCampaignPage = lazy(
  async () => await import('./pages/StartCampaignPage')
);

function App() {
  return (
    <Suspense fallback={<div className="p-5">Loading...</div>}>
      <Routes>
        <Route
          path="/"
          element={<DashboardPage />}
        />
        <Route
          path="/campaign"
          element={<CampaignPage />}
        />
        <Route
          path="/start-campaign"
          element={<StartCampaignPage />}
        />
        <Route
          path="/sign-up"
          element={<SignUpPage />}
        />
        <Route
          path="/sign-in"
          element={<SignInPage />}
        />
      </Routes>
    </Suspense>
  );
}

export default App;
