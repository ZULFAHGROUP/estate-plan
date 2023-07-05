import { createStore, compose, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
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

const headerData = localStorage.getItem("customerInfo")
  ? JSON.parse(localStorage.getItem("customerInfo"))
  : [];
console.log("headerData", headerData);

const token = headerData == null ? "" : headerData.token;

const initialState = {
  customerSignin: { customerInfo: token },
};

const middleware = [thunk];

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

// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
