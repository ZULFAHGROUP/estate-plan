// (1) import constant

import { jwtDecode } from 'jwt-decode';
import { toast } from 'react-toastify';
import { USER_LOGIN } from '../../../../store/actionTypes';
import { login } from '../../../../api/auth';

export function userLogin(user, token) {
  return {
    type: USER_LOGIN,
    user,
    token
  };
}

export const submitLogin = (params) => {

  return async (dispatch) => {
    try {
      const {
        headers: { token },
      } = await login(params);
   
      const user = token ? jwtDecode(token, { header: true }): null;

      dispatch(userLogin(user, token));

      toast.success('Login successful');
      //redirect to dashboard
      window.location.href = '/'

 

      // return response;
    } catch (error) {
 
        toast.error(error.message || 'Invalid login credentials');
      // return error
    }
  };
};
