import React from 'react';
import { Link } from 'react-router-dom';
import { AnimateField } from '../../../components/snappForm';
import {loginSubmit,useFormInput} from './util';
import './style.scss';
function Login(){
    const loginUserName = useFormInput('');
    const loginPass = useFormInput('');
    const {SubmitComp,onKeyPress} = loginSubmit(loginUserName,loginPass);
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
          label="ایمیل یا موبایل"
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
          label="222رمزعبور"
          onKeyPress={onKeyPress}
          required
        />
        <div className="topM40 wFull hP20 center">
            <SubmitComp/>
        </div>
      </div>
    </div>
  );
}

export default Login;