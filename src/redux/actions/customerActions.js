import Axios from "axios";
import axios from "axios";
import Cookies from "js-cookie";
import * as actionTypes from "../constants/customerConstants";
import { Global } from "../../global/Global";

export const listCustomer = () => async (dispatch, getState) => {
  const {
    customerSignin: { customerInfo },
  } = getState();
  try {
    dispatch({ type: actionTypes.CUSTOMER_LIST_REQUEST });
    const result = await Axios.get(`${Global.baseURL}/api/v1/admin/customers`, {
      headers: {
        Authorization: "Bearer " + customerInfo,
      },
    });
    dispatch({
      type: actionTypes.CUSTOMER_LIST_SUCCESS,
      payload: result.data.data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.CUSTOMER_LIST_FAIL,
      payload: error.message,
    });
  }
};

export const detailsCustomer = (id) => async (dispatch, getState) => {
  const {
    customerSignin: { customerInfo },
  } = getState();
  try {
    dispatch({
      type: actionTypes.CUSTOMER_DETAILS_REQUEST,
    });
    const result = await Axios.get(
      `${Global.baseURL}/api/v1/admin/customers/${id}`,
      {
        headers: {
          Authorization: "Bearer " + customerInfo,
        },
      }
    );
    dispatch({
      type: actionTypes.CUSTOMER_DETAILS_SUCCESS,
      payload: result.data.data,
    });
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
        `${Global.baseURL}/api/v1/admin/customers/${customerId}`,
        { name, email, password },
        {
          headers: {
            Authorization: "Bearer " + customerInfo,
          },
        }
      );
      dispatch({
        type: actionTypes.CUSTOMER_UPDATE_SUCCESS,
        payload: data,
      });
      localStorage.setItem("customerInfo", JSON.stringify(data));
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
    const results = await axios.post(
      `${Global.baseURL}/api/v1/admin/login`,
      {
        email,
        password,
      }
    );
    console.log("results", results)
    localStorage.setItem("customerInfo", JSON.stringify(results.headers));
    // dispatch({
    //   type: actionTypes.CUSTOMER_SIGNIN_SUCCESS,
    //   payload: results.headers,
    // });
  } catch (error) {
    dispatch({
      type: actionTypes.CUSTOMER_SIGNIN_FAIL,
      payload: error.message,
    });
  }
};

export const register =
  (username, status, email, age, password) => async (dispatch) => {
    dispatch({
      type: actionTypes.CUSTOMER_REGISTER_REQUEST,
      payload: { username, status, email, age, password },
    });
    try {
      const { data } = await axios.post(
        `${Global.baseURL}/api/v1/admin/customers/register`,
        {
          username,
          status,
          email,
          age,
          password,
        }
      );
      dispatch({ type: actionTypes.CUSTOMER_REGISTER_SUCCESS, payload: data });
      localStorage.setItem("customerInfo", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: actionTypes.CUSTOMER_REGISTER_FAIL,
        payload: error.message,
      });
    }
  };

export const logout = () => (dispatch) => {
  localStorage.removeItem("customerInfo");
  dispatch({ type: actionTypes.CUSTOMER_LOGOUT });
};
