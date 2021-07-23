import {call, put, takeEvery, takeLatest} from 'redux-saga/effects';
import {FETCH_USERS, FETCH_USERS_SUCESS} from './constants';
import {getUsers} from './api/api';
import {setUsersSucess, setUsersFailed} from './actions/users';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchUser(action) {
  try {
    const users = yield call(getUsers, action.payload);
    yield put(setUsersSucess(users));

    //yield put({type: "USER_FETCH_SUCCEEDED", user: user});
  } catch (e) {
    yield put(setUsersFailed(e.message));
    console.warn(e.message);
  }
}

function* mySaga() {
  yield takeLatest(FETCH_USERS, fetchUser);
}

export default mySaga;
