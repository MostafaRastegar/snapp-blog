import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AnimateField } from '../../../components/snappForm';
import { signUpUser } from 'actions/auth';
import {history} from '../../../store';
function Register() {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.Auth);
  const signUpUsername = useFormInput('');
  const signUpUserEmail = useFormInput('');
  const signUpPass = useFormInput('');

  useEffect(()=>{
    // check user login
    if (auth.token) {
      history.push("/");
    }
  },[]);

  function useFormInput(initValue){
    const [value,setValue] = useState(initValue);
    const handleChange = (e) => {
      const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
      setValue(value)
    };
    return {
      value,
      onChange:handleChange,
    }
  };
  
  function signUpSubmit(
    signUpUsername,
    signUpUserEmail,
    signUpPass
  ){
    // fire action
    const user = {
      username: signUpUsername.value,
      email: signUpUserEmail.value,
      password: signUpPass.value,
    };
    dispatch(signUpUser({ user }));
  };

  return (
    <div>
      <div
        className="loginForm"
      >
        <AnimateField
          className="col-12"
          placeholder=" "
          name="signUpUsername"
          value={signUpUsername.value}
          type="text"
          onChange={signUpUsername.onChange}
          label="Username"
        />
        <AnimateField
          className="col-12"
          placeholder=" "
          name="signUpUserEmail"
          value={signUpUserEmail.value}
          type="text"
          onChange={signUpUserEmail.onChange}
          label="Email"
        />
        <AnimateField
          className="col-12"
          placeholder=" "
          name="signUpPass"
          type="password"
          value={signUpPass.value}
          onChange={signUpPass.onChange}
          label="Password"
        />

        <div className="topM40 wFull hP20 center">
          <button className="btn btn-auth btn-success"
          onClick={
            () => signUpSubmit(
              signUpUsername,
              signUpUserEmail,
              signUpPass
            )}>Signup</button>
        </div>
      </div>
    </div>
  );
}

export default Register;
