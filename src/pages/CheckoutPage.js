import React from 'react';

import ContributionSummary from '../modules/payment/ContributionSummary';
import Payment from '../modules/payment/Payment';

const CheckoutPage = () => {
  return (
    <div className="max-w-[891px] flex items-start">
      <div>
        <h2 className="font-bold text-[30px] leading-normal mb-10">Payment</h2>
        <Payment />
      </div>
      <div className="flex-1 max-w-[462px] ml-auto">
        <ContributionSummary />
      </div>
    </div>
  );
};

export default CheckoutPage;
