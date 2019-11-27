import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getUser } from 'actions/auth';

interface loginSubmitType {
    username: string,
    password:string
}

export function loginSubmit(loginUserName,loginPass){
    const dispatch = useDispatch();
    const loginSubmitFunc = ():void=>{
        const user:loginSubmitType = {
          username: loginUserName.value,
          password: loginPass.value,
        };
        dispatch(getUser({user}))
    }
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            loginSubmitFunc();
        }
    };

    const SubmitComp = ():JSX.Element=>{
        return(
        <button 
        className="btn btn-auth btn-success"
        data-test="btnSubmit"
        onClick={()=>loginSubmitFunc()} 
      >ورود</button>
    )}
    return {
        SubmitComp,
        onKeyPress:handleKeyPress

    }
};

export function useFormInput(initValue:string){
    const [value,setValue] = useState(initValue);
    const handleChange = (e):void => {
        setValue(e.target.value);
    }; 
    return {
        value,
        onChange:handleChange,
    }
};