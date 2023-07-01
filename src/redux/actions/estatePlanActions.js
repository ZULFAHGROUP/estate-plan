import * as actionTypes from "../constants/estatePlanConstant";
import axios from "axios";
import Axios from "axios";
import { Global } from "../../global/Global";

export const listEstatePlan = () => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.ESTATEPLAN_LIST_REQUEST });
    const result = await Axios.get(
      `${Global.baseURL}/api/v1/admin/estate-plans`
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

export const detailsEstatePlan = (estatePlanId) => async (dispatch) => {
  try {
    dispatch({
      type: actionTypes.ESTATEPLAN_DETAILS_REQUEST,
      payload: estatePlanId,
    });
    const { data } = await axios.get(
      `/api/v1/admin/estate-plans/${estatePlanId}`
    );
    dispatch({ type: actionTypes.ESTATEPLAN_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: actionTypes.ESTATEPLAN_DETAILS_FAIL,
      payload: error.message,
    });
  }
};

export const saveEstatePlan = (estateplan) => async (dispatch, getState) => {
  try {
    dispatch({
      type: actionTypes.ESTATEPLAN_SAVE_REQUEST,
      payload: estateplan,
    });
    const {
      userSignin: { customerInfo },
    } = getState();
    if (!estateplan._id) {
      const { data } = await Axios.post(
        `/api/v1/admin/estate-plans/create`,
        estateplan,
        {
          headers: {
            Authorization: "Bearer " + customerInfo.token,
          },
        }
      );
      dispatch({ type: actionTypes.ESTATEPLAN_SAVE_SUCCESS, payload: data });
    } else {
      const { data } = await Axios.put(
        `/api/v1/admin/estate-plans/create` + estateplan._id,
        estateplan,
        {
          headers: {
            Authorization: "Bearer " + customerInfo.token,
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

export const deleteEstatePlan =
  (estatePlanId) => async (dispatch, getState) => {
    try {
      const {
        userSignin: { customerInfo },
      } = getState();
      dispatch({
        type: actionTypes.ESTATEPLAN_DELETE_REQUEST,
        payload: estatePlanId,
      });
      const { data } = await axios.delete(
        `/api/v1/admin/estate-plans/save/${estatePlanId}`,
        {
          headers: {
            Authorization: "Bearer " + customerInfo.token,
          },
        }
      );
      dispatch({
        type: actionTypes.ESTATEPLAN_DELETE_SUCCESS,
        payload: data,
        success: true,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.ESTATEPLAN_DELETE_FAIL,
        payload: error.message,
      });
    }
  };
