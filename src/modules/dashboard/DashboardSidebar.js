import React from 'react';
import { NavLink } from 'react-router-dom';

import {
  IconCampaign,
  IconDarkmode,
  IconDashboard,
  IconLogout,
  IconPayment,
  IconWithdraw
} from '../../components/icons';
import IconProfile from '../../components/icons/IconProfile';

const sidebarLinks = [
  {
    icon: <IconDashboard />,
    title: 'Dashboard',
    url: '/'
  },
  {
    icon: <IconCampaign />,
    title: 'Campaign',
    url: '/campaign'
  },
  {
    icon: <IconPayment />,
    title: 'Payment',
    url: '/payment'
  },
  {
    icon: <IconWithdraw />,
    title: 'Withdraw',
    url: '/withdraw'
  },
  {
    icon: <IconProfile />,
    title: 'Profile',
    url: '/profile'
  },
  {
    icon: <IconLogout />,
    title: 'Logout',
    url: '/test2',
    onClick: () => {}
  },
  {
    icon: <IconDarkmode />,
    title: 'Light/Dark',
    url: '/test3',
    onClick: () => {}
  }
];

const DashboardSidebar = () => {
  const navlinkClass =
    'flex items-center gap-x-5 lg:w-12 lg:h-12 lg:justify-center lg:rounded-lg lg:mb-8 last:mt-auto last:bg-white last:shadow-sd-primary last:mb-0';

  return (
    <div className="w-full lg:w-[76px] rounded-3xl bg-white shadow-[10px_10px_20px_rgba(218,_213,_213,_0.15)] px-[14px] py-10 flex flex-col flex-shrink-0">
      {sidebarLinks.map((link) => (
        <NavLink
          to={link.url}
          key={link.title}
          className={({ isActive }) =>
            isActive
              ? `${navlinkClass} bg-primary text-primary bg-opacity-20`
              : `${navlinkClass} text-icon-color`
          }
        >
          <span>{link.icon}</span>
          <span className="md:hidden">{link.title}</span>
        </NavLink>
      ))}
    </div>
  );
};

export default DashboardSidebar;
