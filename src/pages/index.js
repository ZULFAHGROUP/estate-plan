import React from 'react';

const Suspensed = (Element) =>
  function suspense(props) {
    return (
      <React.Suspense fallback={<div />}>
        <Element {...props} />
      </React.Suspense>
    );
  };

export default {
  Home: Suspensed(React.lazy(() => import('./Admin/Home'))),
  Gallery: Suspensed(React.lazy(() => import('./Admin/Gallery'))),
  Logout: Suspensed(React.lazy(() => import('./Admin/Logout')))
};
