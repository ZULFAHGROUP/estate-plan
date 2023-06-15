import Axios from "axios";
import axios from "axios";
import Cookies from "js-cookie";
import * as actionTypes from "../constants/customerConstants";
import { GLOBALS } from "../../global/Globals";

export const listCustomer = () => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.CUSTOMER_LIST_REQUEST });
    const { data } = await axios.get(
      `${GLOBALS.BASE_URL}/api/v1/admin/customers`
    );
    dispatch({ type: actionTypes.CUSTOMER_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: actionTypes.CUSTOMER_LIST_FAIL, payload: error.message });
  }
};

export const detailsCustomer = (id) => async (dispatch) => {
  dispatch({ type: actionTypes.CUSTOMER_DETAILS_REQUEST });
  try {
    const { data } = await axios.post(
      `${GLOBALS.BASE_URL}/api/v1/admin/customers/${id}`
    );
    dispatch({ type: actionTypes.CUSTOMER_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: actionTypes.CUSTOMER_DETAILS_FAIL,
      payload: error.message,
    });
  }
};

export const update =
  ({ customerId, name, email, password }) =>
  async (dispatch, getState) => {
    const {
      customerSignin: { customerInfo },
    } = getState();
    dispatch({
      type: actionTypes.CUSTOMER_UPDATE_REQUEST,
      payload: { customerId, name, email, password },
    });
    try {
      const { data } = await Axios.put(
        `${GLOBALS.BASE_URL}/api/v1/admin/customers/${customerId}`,
        { name, email, password },
        {
          headers: {
            Authorization: "Bearer " + customerInfo.token,
          },
        }
      );
      dispatch({ type: actionTypes.CUSTOMER_UPDATE_SUCCESS, payload: data });
      Cookies.set("customerInfo", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: actionTypes.CUSTOMER_UPDATE_FAIL,
        payload: error.message,
      });
    }
  };

export const signIn = (email, password) => async (dispatch) => {
  dispatch({
    type: actionTypes.CUSTOMER_SIGNIN_REQUEST,
    payload: { email, password },
  });
  try {
    const { data } = await axios.post(
      `${GLOBALS.BASE_URL}/api/v1/admin/login`,
      {
        email,
        password,
      }
    );
    dispatch({ type: actionTypes.CUSTOMER_SIGNIN_SUCCESS, payload: data });
    Cookies.set("customerInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: actionTypes.CUSTOMER_SIGNIN_FAIL,
      payload: error.message,
    });
  }
};

export const register = (name, email, password) => async (dispatch) => {
  dispatch({
    type: actionTypes.CUSTOMER_REGISTER_REQUEST,
    payload: { name, email, password },
  });
  try {
    const { data } = await axios.post(
      `${GLOBALS.BASE_URL}/api/v1/admin/customers/register`,
      {
        name,
        email,
        password,
      }
    );
    dispatch({ type: actionTypes.CUSTOMER_REGISTER_SUCCESS, payload: data });
    Cookies.set("customerInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: actionTypes.CUSTOMER_REGISTER_FAIL,
      payload: error.message,
    });
  }
};

export const logout = () => (dispatch) => {
  Cookies.remove("customerInfo");
  dispatch({ type: actionTypes.CUSTOMER_LOGOUT });
};
