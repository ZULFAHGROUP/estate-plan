import jwt from 'jwt-decode';

import { USER_LOGIN } from '../../store/actionTypes';
import { getToken } from '../../utils/storage';

const initialState = getToken()
  ? { user: jwt(getToken()), token: getToken() }
  : { user: null, token: null };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case USER_LOGIN:
      return {
        user: action.user,
        token: action.token
      };

    default:
      return state;
  }
}
