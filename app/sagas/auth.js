import { takeLatest, takeEvery, put } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { history } from 'store';
import {
  loginPost,
  signUpPost,
} from '../api/account';

import {
  SIGNIN_USER,
  SIGNUP_USER,
} from '../constants/actionAuthTypes';

import {
  getUserInfo,
  signUpUserResponse,

} from '../actions/auth';


import { disableLoading, enableLoading } from 'actions/loading';

import { addToast } from 'actions/notifications';

import { addValidation, removeValidation } from 'actions/validations';

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* watchUserLogin() {
  yield takeLatest(SIGNIN_USER, userLogin);
}

// worker saga: makes the api call when watcher saga sees the action
function* userLogin({ payload }) {
  try {
    yield put(enableLoading({ loginLoading: true }));
    const signInUser = yield loginPost(payload.user);
    if (signInUser.status) {
      yield put(getUserInfo(signInUser.result.session.user));
      yield put(getUserBalance(signInUser.result.session.user.cacheBalance));
      yield put(disableLoading({ loginLoading: false }));
      yield put(
        addToast({
          text: signInUser.message_fa,
          color: 'success',
          delay: 2000,
        }),
      );
      yield put(
        removeValidation({
          userLogin: {},
        }),
      );
      if (signInUser.result.session.user.mobileIsVerified) {
        yield put(push(localStorage.getItem('prevLocation')));
      } else {
        yield put(push('/activation-code/'));
      }
    } else {
      yield put(disableLoading({ loginLoading: false }));
      if (signInUser) {
        yield put(
          addToast({
            text: signInUser.message_fa,
            color: 'danger',
            delay: 2000,
          }),
        );
      } else {
        yield put(
          addToast({
            text: 'امکان لاگین وجود ندارد',
            color: 'danger',
            delay: 2000,
          }),
        );
      }
    }
  } catch (error) {
    yield put(disableLoading({ loginLoading: false }));

    if (error.status === 422) {
      yield put(
        addValidation({
          userLogin: error.data.errors,
        }),
      );
    } else {
      yield put(
        addToast({
          text: error.data.message,
          color: 'danger',
          delay: 2000,
        }),
      );
    }
  }
}

export function* watchUserSignup() {
  yield takeLatest(SIGNUP_USER, userSignUp);
}

// worker saga: makes the api call when watcher saga sees the action
function* userSignUp({ payload }) {
  try {
    yield put(enableLoading({ registerLoading: true }));
    const signUpUser = yield signUpPost(payload.user);

    if (signUpUser.status) {
      yield put(getUserInfo(signUpUser.result.session.user));
      yield put(getUserBalance(signUpUser.result.session.user.cacheBalance));
      yield put(signUpUserResponse(signUpUser.data));
      yield put(disableLoading({ registerLoading: false }));
      yield put(push('/activation-code'));
      yield put(
        removeValidation({
          userSignup: {},
        }),
      );
    } else {
      yield put(disableLoading({ registerLoading: false }));

      yield put(
        addToast({
          text: signUpUser.message_fa,
          color: 'danger',
          delay: 2000,
        }),
      );
    }
  } catch (error) {
    yield put(disableLoading({ registerLoading: false }));

    if (error.status === 422) {
      yield put(
        addValidation({
          userSignup: error.data.errors,
        }),
      );
    } else {
      yield put(
        addToast({
          text: error.data.message,
          color: 'danger',
          delay: 2000,
        }),
      );
    }
  }
}