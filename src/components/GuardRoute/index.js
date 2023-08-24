import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const GuardRoute = (route) => {
  let { token } = useSelector((state) => state.auth);
  return token ? <Route {...route} /> : <Redirect to="/login" />;
};

GuardRoute.defaultProps = {
  route: {}
};
GuardRoute.propTypes = {
  route: PropTypes.object
};

export default GuardRoute;
