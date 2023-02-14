import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const RequireAuthPage = ({ allowPermissions }) => {
  const { user } = useSelector((state) => state.auth);
  const location = useLocation();
  const userPermissions = user?.permissions || [];
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (!user) {
  //     navigate('/sign-in');
  //   }
  // }, [navigate, user]);

  // if (!user || !user.email) return null;

  return userPermissions.find((p) => allowPermissions?.includes(p)) ? (
    <Outlet />
  ) : user ? (
    <Navigate
      state={{ from: location }}
      to="/unauthorize"
      replace
    />
  ) : (
    <Navigate
      state={{ from: location }}
      to="/sign-in"
      replace
    />
  );
};

export default RequireAuthPage;
