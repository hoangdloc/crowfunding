import React from 'react';
import ReactModal from 'react-modal';

import CampaignPerk from '../../modules/campaign/CampaignPerk';
import { Button } from '../button';

const ModalBackProject = () => {
  return (
    <ReactModal
      isOpen={false}
      overlayClassName="modal-overlay fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center"
      className="modal-content w-full max-w-[521px] bg-white rounded-2xl outline-none p-10 relative max-h-[90vh] overflow-y-auto scroll-hidden"
    >
      <button className="w-11 h-11 flex items-center justify-center absolute z-10 right-10 top-[10px] text-text1 cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <h2 className="font-bold text-[25px] mb-10 text-center">
        Back this project
      </h2>
      <p className="mb-3 text-sm">Enter the contribute amount</p>
      <input
        placeholder="$10"
        type="text"
        name="amount"
        className="text-lg font-medium py-2 px-5 border border-strock w-full rounded"
      />
      <p className="text-text3 my-5 text-sm">
        Contribution are not associated with perks
      </p>
      <Button kind="primary">Continue</Button>
      <div className="mt-[60px]"></div>
      <CampaignPerk showButton />
    </ReactModal>
  );
};

export default ModalBackProject;
