import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {history} from '../../../store';
import Login from '../Login';
import Register from '../Register';
import {useStyles} from './style';

function Authentication() {
  const {borderLeft} = useStyles();
  const auth = useSelector(state => state.Auth);
  useEffect(()=>{
    // check user login
    if (auth.token) {
      history.push("/");
    }
  },[]);
  return (
    <div className="row">
      <div className="col-md-6"><Login/></div>
      <div className={`col-md-6 ${borderLeft}`}><Register/></div>
    </div>
  );
}

export default Authentication;