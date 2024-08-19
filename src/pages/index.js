import React from 'react';

const Suspensed = (Element) =>
  function suspense(props) {
    return (
      <React.Suspense fallback={<div />}>
        <Element {...props} />
      </React.Suspense>
    );
  };

const pages = {
  Home: Suspensed(React.lazy(() => import('./Admin/Home'))),
  Gallery: Suspensed(React.lazy(() => import('./Admin/Gallery'))),
  Reports: Suspensed(React.lazy(() => import('./Admin/Reports'))),
  Nin: Suspensed(React.lazy(() => import('./Admin/Nin'))),
  Logout: Suspensed(React.lazy(() => import('./Admin/Logout')))
};

export default pages;
