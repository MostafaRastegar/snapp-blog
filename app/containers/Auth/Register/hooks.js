/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AnimateField } from '../../../components/snappForm';
import { signUpUser } from 'actions/auth';
import './style.scss';

function Register() {
  const dispatch = useDispatch();
  const signUpFullname = useFormInput('');
  const signUpPhone = useFormInput('');
  const signUpUserEmail = useFormInput('');
  const signUpPass = useFormInput('');

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
    signUpFullname,
    signUpPhone,
    signUpUserEmail,
    signUpPass
  ){
    // fire action
    const user = {
      fullName: signUpFullname.value,
      mobileNumber: signUpPhone.value,
      email: signUpUserEmail.value,
      password: signUpPass.value,
      confirmPass: signUpPass.value,
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
          name="signUpFullname"
          value={signUpFullname.value}
          type="text"
          onChange={signUpFullname.onChange}
          label="نام و نام خانوادگی"
        />
        <AnimateField
          className="col-12"
          placeholder=" "
          name="signUpPhone"
          value={signUpPhone.value}
          type="text"
          onChange={signUpPhone.onChange}
          label="موبایل"
          // validation={['شماره موبایل اشتباه است.']}
        />
        <AnimateField
          className="col-12"
          placeholder=" "
          name="signUpUserEmail"
          value={signUpUserEmail.value}
          type="text"
          onChange={signUpUserEmail.onChange}
          label="ایمیل"
          // validation={['ایمیل اشتباه است.']}
        />
        <AnimateField
          className="col-12"
          placeholder=" "
          name="signUpPass"
          type="password"
          value={signUpPass.value}
          onChange={signUpPass.onChange}
          label="رمزعبور"
        />
        <div className="text-center mt-4">
          <span className="ruleAndCondition midText">
            با کلیک بر روی دکمه ثبت نام شما
            <span className="ruleAndCondition__link">
              <Link to="/static/law" className="">
                <span className="accordion__list-text">
                  {'\u00A0'}
                  قوانین چیلیوری
                  {'\u00A0'}
                </span>
              </Link>
            </span>
            را پذیرفته اید
          </span>
        </div>
        <div className="topM40 wFull hP20 center">
          <button className="btn btn-auth btn-success"
          onClick={
            () => signUpSubmit(
              signUpFullname,
              signUpPhone,
              signUpUserEmail,
              signUpPass
            )}>ثبت نام</button>
        </div>
      </div>
    </div>
  );
}

export default Register;
