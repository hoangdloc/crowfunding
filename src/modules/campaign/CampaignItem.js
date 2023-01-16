import React from 'react';
import { Link } from 'react-router-dom';

import { IconFolder } from '../../components/icons';

const CampaignItem = () => {
  return (
    <div>
      <div className="h-[158px]">
        <img
          src="https://cvws.icloud-content.com/B/AaXob105MHp5pcgSyb5fs5hq_DP1AdMZImg6i9flolvShDoAKqegC40z/IMG_1262.JPG?o=AtMYg02RLKPe9GMgKoLQmWlchqkLCQNVCtT-LBX_Pu0u&v=1&x=3&a=CAogXNPH2lWWiIbxdvrVqDdZG3BybifS0Z3H38ayoIhcd5kSbxCOrMje2zAYjomk4NswIgEAUgRq_DP1WgSgC40zaifwM50U01wC9ERueEsVzleoiGX3shjhv4yvN0bdgJ0zW9faHdbSdYRyJ3mo887hI65JZ1-Ftur8JVVmERij-dyGDRMp0ZKg_RL24GP2zc8zmw&e=1673896985&fl=&r=29fd446b-5797-460c-9cca-923d4f373356-1&k=xsiNa7VHFsju0RHBDCOIcQ&ckc=com.apple.clouddocs&ckz=com.apple.CloudDocs&p=51&s=os5esIT1MDcYlKDBXC9VT-4532g&cd=i"
          alt="Fund"
          className="object-cover w-full h-full rounded-2xl"
        />
      </div>
      <div className="px-5 py-4">
        <Link
          to="/"
          className="flex items-baseline mb-4 text-xs font-medium gap-x-3 text-text3"
        >
          <IconFolder />
          <span>Education</span>
        </Link>
        <h3 className="mb-1 font-semibold text-text1">
          Powered Kits Learning Boxes
        </h3>
        <p className="mb-4 text-sm text-text3">
          Fun, durable and reusable boxes with eco-friendly options.
        </p>
        <div className="flex items-start justify-between mb-5 gap-x-5">
          <div className="flex flex-col gap-y-1">
            <h4 className="text-sm font-semibold text-text2">$2,000</h4>
            <span className="text-xs text-text4">Raised of $1,900</span>
          </div>
          <div className="flex flex-col gap-y-1">
            <h4 className="text-sm font-semibold text-text2">173</h4>
            <span className="text-xs text-text4">Total backers</span>
          </div>
        </div>
        <div className="flex items-center gap-x-3">
          <img
            src="https://cvws.icloud-content.com/B/AVGuMfz7P0XGfvm6Di1l9o88fohBAZcHgtgWqxxxCb9v2kLLCywWXtuC/239334224_1507159206305636_800834739163916375_n.jpg?o=AtYx1j3r13hX4UBdrQRBDdJQ2EmdMYqmfh_o_QtXMGfZ&v=1&x=3&a=CAogk_pAcKrq7TAVPl8rg6XsFb9-kpbjZh_fpY_yq5TznocSbxDoqqHf2zAY6If94NswIgEAUgQ8fohBWgQWXtuCaidFPKq-MQuBEaQsyJXeoj3qHWrAcSU2CqZGsnQFaDk91EfYB1pA_z5yJ3U5hqjZ8j0X-gWumYEkBURwK_DfTpHoNLT0ijBIPiG0N7zgfu8V3w&e=1673898443&fl=&r=6a64fbf4-e86f-4213-998d-def6ae1795bb-1&k=12CWvr82zLW8GEvZvQVquA&ckc=com.apple.clouddocs&ckz=com.apple.CloudDocs&p=51&s=LcLqGVyZLqYV8MtD4oXSu9ZrG-o&cd=i"
            alt="User"
            className="object-cover w-8 h-8 rounded-full"
          />
          <p className="text-xs text-text3">
            By <strong className="font-semibold text-text2">My Duyen</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CampaignItem;
