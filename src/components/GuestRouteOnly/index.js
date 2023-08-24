import * as React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function GuestOnlyRoute(route) {
  let { token } = useSelector((state) => state.auth);

  return !token ? <Route {...route} /> : <Redirect to="/" />;
}

GuestOnlyRoute.defaultProps = {
  route: null
};
GuestOnlyRoute.propTypes = {
  route: PropTypes.object
};
