import React from 'react';
import { useDispatch } from 'react-redux';
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
import { authLogout } from '../../store/auth/auth-slice';
import { logOut } from '../../utils/auth';

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
    url: '/logout',
    onClick: () => {
      logOut();
    }
  },
  {
    icon: <IconDarkmode />,
    title: 'Light/Dark',
    url: '/test3'
  }
];

const DashboardSidebar = () => {
  const navlinkClass =
    'flex items-center gap-x-5 lg:w-12 lg:h-12 lg:justify-center lg:rounded-lg lg:mb-8 last:mt-auto last:bg-white last:shadow-sd-primary last:mb-0';
  const dispatch = useDispatch();

  return (
    <div className="w-full lg:w-[76px] rounded-3xl bg-white shadow-[10px_10px_20px_rgba(218,_213,_213,_0.15)] px-[14px] py-10 flex flex-col flex-shrink-0">
      {sidebarLinks.map((link) => {
        if (link.url === '/logout') {
          return (
            <button
              className={`${navlinkClass} text-icon-color`}
              onClick={() => dispatch(authLogout())}
            >
              <span>{link.icon}</span>
              <span className="md:hidden">{link.title}</span>
            </button>
          );
        }
        return (
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
        );
      })}
    </div>
  );
};

export default DashboardSidebar;
