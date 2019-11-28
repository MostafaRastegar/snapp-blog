import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { AnimateField } from '../../../components/snappForm';
import { loginSubmit, useFormInput } from './util';
import {history} from '../../../store';

import './style.scss';
function Login() {
  const loginUserName = useFormInput('john@jacob.com');
  const loginPass = useFormInput('johnnyjacob');
  const auth = useSelector(state => state.Auth);
  const { SubmitComp, onKeyPress } = loginSubmit(loginUserName, loginPass);
  useEffect(()=>{
    // check user login
    if (auth.token) {
      history.push("/");
    }
  },[]);
  return (
    <div>
      <div className="loginForm">
        <AnimateField
          className="col-12"
          placeholder=" "
          name="loginUserName"
          value={loginUserName.value}
          type="text"
          onChange={loginUserName.onChange}
          label="Email"
          onKeyPress={onKeyPress}
          required
        />
        <AnimateField
          className="col-12"
          placeholder=" "
          name="loginPass"
          onChange={loginPass.onChange}
          value={loginPass.value}
          type="password"
          label="Password"
          onKeyPress={onKeyPress}
          required
        />

        <div className="topM40 wFull hP20 center">
          <SubmitComp />
        </div>
      </div>
    </div>
  );
}

export default Login;