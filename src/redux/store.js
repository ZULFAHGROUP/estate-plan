import { createStore, compose, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import Cookies from "js-cookie";

/* ESTATE PLAN */
import {
  estatePlanListReducer,
  estatePlanDetailsReducer,
  estatePlanEditReducer,
  estatePlanSaveReducer,
  estatePlanDeleteReducer,
} from "./reducers/estatePlanReducers";

/* CUSTOMER */
import {
  customerListReducer,
  customerDetailsReducer,
  customerSigninReducer,
  customerRegisterReducer,
  customerUpdateReducer,
} from "./reducers/customerReducers";

const customerInfo = Cookies.get("customerInfo") || null;

const initialState = {
  customerSignin: { customerInfo },
};

const reducer = combineReducers({
  /* ESTATE PLAN */
  estatePlanList: estatePlanListReducer,
  estatePlanDetails: estatePlanDetailsReducer,
  estatePlanEdit: estatePlanEditReducer,
  estatePlanSave: estatePlanSaveReducer,
  estatePlanDelete: estatePlanDeleteReducer,

  /* CUSTOMER */
  customerList: customerListReducer,
  customerDetails: customerDetailsReducer,
  customerSignin: customerSigninReducer,
  customerRegister: customerRegisterReducer,
  customerUpdate: customerUpdateReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
