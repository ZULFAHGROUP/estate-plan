import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Component from './Component';
import * as actions from './action';
import validation from './validation';

export const mapStateToProps = (state) => {
  return {
    auth: { ...state.auth }
  };
};

export const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch)
});

const Connected = connect(mapStateToProps, mapDispatchToProps)(Component);

export default reduxForm({
  form: 'login',
  validation
})(Connected);
