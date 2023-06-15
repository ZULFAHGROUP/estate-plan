import * as actionTypes from "../constants/estatePlanConstant";

function estatePlanListReducer(state = { estateplans: [] }, action) {
  switch (action.type) {
    case actionTypes.ESTATEPLAN_LIST_REQUEST:
      return { loading: true, estateplans: [] };
    case actionTypes.ESTATEPLAN_LIST_SUCCESS:
      return { loading: false, estateplans: action.payload };
    case actionTypes.ESTATEPLAN_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

function estatePlanDetailsReducer(
  state = { estateplan: { reviews: [] } },
  action
) {
  switch (action.type) {
    case actionTypes.ESTATEPLAN_DETAILS_REQUEST:
      return { loading: true };
    case actionTypes.ESTATEPLAN_DETAILS_SUCCESS:
      return { loading: false, estateplan: action.payload };
    case actionTypes.ESTATEPLAN_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

function estatePlanEditReducer(state = { estateplan: {} }, action) {
  switch (action.type) {
    case actionTypes.ESTATEPLAN_EDIT_REQUEST:
      return { loading: true };
    case actionTypes.ESTATEPLAN_EDIT_SUCCESS:
      return { loading: false, estateplan: action.payload };
    case actionTypes.ESTATEPLAN_EDIT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

function estatePlanDeleteReducer(state = { estateplan: {} }, action) {
  switch (action.type) {
    case actionTypes.ESTATEPLAN_DELETE_REQUEST:
      return { loading: true };
    case actionTypes.ESTATEPLAN_DELETE_SUCCESS:
      return { loading: false, estateplan: action.payload, success: true };
    case actionTypes.ESTATEPLAN_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

function estatePlanSaveReducer(state = { estateplan: {} }, action) {
  switch (action.type) {
    case actionTypes.ESTATEPLAN_SAVE_REQUEST:
      return { loading: true };
    case actionTypes.ESTATEPLAN_SAVE_SUCCESS:
      return { loading: false, success: true, estateplan: action.payload };
    case actionTypes.ESTATEPLAN_SAVE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

export {
  estatePlanListReducer,
  estatePlanDetailsReducer,
  estatePlanEditReducer,
  estatePlanSaveReducer,
  estatePlanDeleteReducer,
};
