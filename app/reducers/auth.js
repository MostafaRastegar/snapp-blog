import {
  // USER_AUTH_CHECK,
  // SIGNIN_USER,
  SIGNIN_USER_INFO,
  SIGNOUT_USER,
  UPDATE_USER_INFO,
} from '../constants/actionAuthTypes';

const user = (state = {}, action) => {
  switch (action.type) {

    case SIGNIN_USER_INFO:
      return Object.assign({}, state, action.payload);
      
    case UPDATE_USER_INFO:
      return Object.assign({}, state, action.payload);

    case SIGNOUT_USER:
      localStorage.removeItem("token");
      return {};

    default:
      return state;
  }
};

export default user;
