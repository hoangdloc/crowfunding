import React, { lazy, Suspense } from 'react';
import Modal from 'react-modal';
import { Route, Routes } from 'react-router-dom';

Modal.setAppElement('#root');

const SignUpPage = lazy(async () => await import('./pages/SignUpPage'));
const SignInPage = lazy(async () => await import('./pages/SignInPage'));
const LayoutDashboard = lazy(
  async () => await import('./layouts/LayoutDashboard')
);
const DashboardPage = lazy(async () => await import('./pages/DashboardPage'));
const CampaignPage = lazy(async () => await import('./pages/CampaignPage'));
const StartCampaignPage = lazy(
  async () => await import('./pages/StartCampaignPage')
);
const CampaignView = lazy(
  async () => await import('./modules/campaign/CampaignView')
);
const LayoutPayment = lazy(async () => await import('./layouts/LayoutPayment'));
const CheckoutPage = lazy(async () => await import('./pages/CheckoutPage'));
const ShippingPage = lazy(async () => await import('./pages/ShippingPage'));
const WithdrawPage = lazy(async () => await import('./pages/WithdrawPage'));
const PaymentPage = lazy(async () => await import('./pages/PaymentPage'));

function App() {
  return (
    <Suspense fallback={<div className="p-5">Loading...</div>}>
      <Routes>
        <Route element={<LayoutDashboard />}>
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
            path="/campaign/:slug"
            element={<CampaignView />}
          />
          <Route
            path="/withdraw"
            element={<WithdrawPage />}
          />
          <Route
            path="/payment"
            element={<PaymentPage />}
          />
        </Route>
        <Route element={<LayoutPayment />}>
          <Route
            path="/checkout"
            element={<CheckoutPage />}
          ></Route>
          <Route
            path="/shipping-address"
            element={<ShippingPage />}
          ></Route>
        </Route>
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
