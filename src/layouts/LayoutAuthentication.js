import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { withErrorBoundary } from 'react-error-boundary';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import ErrorComponent from '../components/common/ErrorComponent';

const LayoutAuthentication = (props) => {
  const { children, heading = '' } = props;
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [navigate, user]);

  if (user) return null;

  return (
    <div className="relative w-full min-h-screen p-10 bg-lite isolate dark:bg-darkbg">
      <img
        src="/ellipse.png"
        alt="bg"
        className="hidden lg:block pointer-events-none absolute bottom-0 left-0 right-0 z-[-1]"
      />
      <Link
        to="/"
        className="inline-block mb-5 lg:mb-16"
      >
        <img
          srcSet="/logo.png 2x"
          alt="crowfunding-app"
        />
      </Link>
      <div className="w-full max-w-[556px] bg-white dark:bg-dark-secondary rounded-xl px-5 py-8 lg:px-16 lg:py-12 mx-auto">
        <h1 className="mb-1 text-lg font-semibold text-center lg:text-xl lg:mb-3 text-text1 dark:text-white">
          {heading}
        </h1>
        {children}
      </div>
    </div>
  );
};

LayoutAuthentication.propTypes = {
  heading: PropTypes.string,
  children: PropTypes.node
};

export default withErrorBoundary(LayoutAuthentication, {
  FallbackComponent: ErrorComponent
});
