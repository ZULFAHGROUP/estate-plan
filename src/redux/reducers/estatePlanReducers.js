import * as actionTypes from "../constants/estatePlanConstant";

function estatePlanListReducer(state = { estatePlans: [] }, action) {
  switch (action.type) {
    case actionTypes.ESTATEPLAN_LIST_REQUEST:
      return { loading: true, estatePlans: [] };
    case actionTypes.ESTATEPLAN_LIST_SUCCESS:
      return { loading: false, estatePlans: action.payload };
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
      return { loading: false, estatePlan: action.payload };
    case actionTypes.ESTATEPLAN_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

function estatePlanEditReducer(state = { estatePlan: {} }, action) {
  switch (action.type) {
    case actionTypes.ESTATEPLAN_EDIT_REQUEST:
      return { loading: true };
    case actionTypes.ESTATEPLAN_EDIT_SUCCESS:
      return { loading: false, estatePlan: action.payload };
    case actionTypes.ESTATEPLAN_EDIT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

function estatePlanDeleteReducer(state = { estatePlan: {} }, action) {
  switch (action.type) {
    case actionTypes.ESTATEPLAN_DELETE_REQUEST:
      return { loading: true };
    case actionTypes.ESTATEPLAN_DELETE_SUCCESS:
      return { loading: false, estatePlan: action.payload, success: true };
    case actionTypes.ESTATEPLAN_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

function estatePlanSaveReducer(state = { estatePlan: {} }, action) {
  switch (action.type) {
    case actionTypes.ESTATEPLAN_SAVE_REQUEST:
      return { loading: true };
    case actionTypes.ESTATEPLAN_SAVE_SUCCESS:
      return { loading: false, success: true, estatePlan: action.payload };
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
