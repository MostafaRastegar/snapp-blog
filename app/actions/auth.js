import {
  SIGNIN_USER,
  SIGNUP_USER,
  SIGNOUT_USER,
  SIGNIN_USER_INFO,
  UPDATE_USER_INFO,
  UPDATE_USER,
  SIGNUP_USER_RESPONSE,

} from 'constants/actionAuthTypes';

export const getUser = user => ({
  type: SIGNIN_USER,
  payload: user,
});

export const getUserUpdate = user => ({
  type: UPDATE_USER,
  payload: user,
});
export const logOutUser = user => ({
  type: SIGNOUT_USER,
  payload: user,
});

export const signUpUser = user => ({
  type: SIGNUP_USER,
  payload: user,
});
export const signUpUserResponse = user => ({
  type: SIGNUP_USER_RESPONSE,
  payload: user,
});

export const getUserInfo = user => ({
  type: SIGNIN_USER_INFO,
  payload: user,
});

export const getUserUpdateInfo = user => ({
  type: UPDATE_USER_INFO,
  payload: user,
});

