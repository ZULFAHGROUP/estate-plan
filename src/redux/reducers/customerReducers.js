import * as actionTypes from "../constants/customerConstants";

function customerListReducer(state = { customers: [] }, action) {
  switch (action.type) {
    case actionTypes.CUSTOMER_LIST_REQUEST:
      return { loading: true, customers: [] };
    case actionTypes.CUSTOMER_LIST_SUCCESS:
      return { loading: false, customers: action.payload };
    case actionTypes.CUSTOMER_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

function customerDetailsReducer(state = { customer: {} }, action) {
  switch (action.type) {
    case actionTypes.CUSTOMER_DETAILS_REQUEST:
      return { loading: true };
    case actionTypes.CUSTOMER_DETAILS_SUCCESS:
      return { loading: false, customer: action.payload };
    case actionTypes.CUSTOMER_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

function customerSigninReducer(state = {}, action) {
  switch (action.type) {
    case actionTypes.CUSTOMER_SIGNIN_REQUEST:
      return { loading: true };
    case actionTypes.CUSTOMER_SIGNIN_SUCCESS:
      return { loading: false, customerInfo: action.payload };
    case actionTypes.CUSTOMER_SIGNIN_FAIL:
      return { loading: false, error: action.payload };
    case actionTypes.CUSTOMER_LOGOUT:
      return {};
    default:
      return state;
  }
}

function customerUpdateReducer(state = {}, action) {
  switch (action.type) {
    case actionTypes.CUSTOMER_UPDATE_REQUEST:
      return { loading: true };
    case actionTypes.CUSTOMER_UPDATE_SUCCESS:
      return { loading: false, customerInfo: action.payload };
    case actionTypes.CUSTOMER_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

function customerRegisterReducer(state = {}, action) {
  switch (action.type) {
    case actionTypes.CUSTOMER_REGISTER_REQUEST:
      return { loading: true };
    case actionTypes.CUSTOMER_REGISTER_SUCCESS:
      return { loading: false, customerInfo: action.payload };
    case actionTypes.CUSTOMER_REGISTER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}
export {
  customerListReducer,
  customerDetailsReducer,
  customerSigninReducer,
  customerRegisterReducer,
  customerUpdateReducer,
};
