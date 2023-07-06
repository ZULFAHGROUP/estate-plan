import * as actionTypes from "../constants/estatePlanConstant";
import axios from "axios";
import Axios from "axios";
import { Global } from "../../global/Global";

export const listEstatePlan = () => async (dispatch, getState) => {
  const {
    customerSignin: { customerInfo },
  } = getState();
  try {
    dispatch({ type: actionTypes.ESTATEPLAN_LIST_REQUEST });
    const result = await Axios.get(
      `${Global.baseURL}/api/v1/admin/estate-plans`,
      {
        headers: {
          Authorization: "Bearer " + customerInfo,
        },
      }
    );
    dispatch({
      type: actionTypes.ESTATEPLAN_LIST_SUCCESS,
      payload: result.data.data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.ESTATEPLAN_LIST_FAIL,
      payload: error.message,
    });
  }
};

export const detailsEstatePlan = (id) => async (dispatch, getState) => {
  const {
    customerSignin: { customerInfo },
  } = getState();
  try {
    dispatch({
      type: actionTypes.ESTATEPLAN_DETAILS_REQUEST,
    });
    const { data } = await axios.get(
      `${Global.baseURL}/api/v1/admin/estate-plans/${id}`,
      {
        headers: {
          Authorization: "Bearer " + customerInfo,
        },
      }
    );
    dispatch({
      type: actionTypes.ESTATEPLAN_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.ESTATEPLAN_DETAILS_FAIL,
      payload: error.message,
    });
  }
};

export const editEstatePlan = (id) => async (dispatch, getState) => {
  const {
    customerSignin: { customerInfo },
  } = getState();
  try {
    dispatch({
      type: actionTypes.ESTATEPLAN_EDIT_REQUEST,
    });
    const { data } = await axios.get(
      `${Global.baseURL}/api/v1/admin/estate-plans`,
      {
        headers: {
          Authorization: "Bearer " + customerInfo,
        },
      }
    );
    dispatch({
      type: actionTypes.ESTATEPLAN_EDIT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.ESTATEPLAN_EDIT_FAIL,
      payload: error.message,
    });
  }
};

export const saveEstatePlan =
  (estate_plan, customer, details) => async (dispatch, getState) => {
    try {
      dispatch({
        type: actionTypes.ESTATEPLAN_SAVE_REQUEST,
        payload: estate_plan,
      });
      const {
        customerSignin: { customerInfo },
      } = getState();
      if (!estate_plan._id) {
        const { data } = await Axios.post(
          `${Global.baseURL}/api/v1/admin/estate-plans`,
          { estate_plan, customer, details },
          {
            headers: {
              Authorization: "Bearer " + customerInfo,
            },
          }
        );
        dispatch({ type: actionTypes.ESTATEPLAN_SAVE_SUCCESS, payload: data });
      } else {
        const { data } = await Axios.put(
          `${Global.baseURL}/api/v1/admin/estate-plans` + estate_plan._id,
          { estate_plan, customer, details },
          {
            headers: {
              Authorization: "Bearer " + customerInfo,
            },
          }
        );
        dispatch({ type: actionTypes.ESTATEPLAN_SAVE_SUCCESS, payload: data });
      }
    } catch (error) {
      dispatch({
        type: actionTypes.ESTATEPLAN_SAVE_FAIL,
        payload: error.message,
      });
    }
  };

export const deleteEstatePlan = (id) => async (dispatch, getState) => {
  try {
    const {
      customerSignin: { customerInfo },
    } = getState();
    dispatch({
      type: actionTypes.ESTATEPLAN_DELETE_REQUEST,
      payload: id,
    });
    const result = await axios.delete(
      `${Global.baseURL}/api/v1/admin/estate-plans`,
      {
        headers: {
          Authorization: "Bearer " + customerInfo,
        },
      }
    );
    dispatch({
      type: actionTypes.ESTATEPLAN_DELETE_SUCCESS,
      payload: result.data.data,
      success: true,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.ESTATEPLAN_DELETE_FAIL,
      payload: error.message,
    });
  }
};
