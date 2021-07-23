import {
  FETCH_USERS,
  FETCH_USERS_SUCESS,
  FETCH_USERS_FAILED,
} from '../constants';

export const getUsers = params => ({
  type: FETCH_USERS,
  payload: params,
});

export const setUsersSucess = users => ({
  type: FETCH_USERS_SUCESS,
  payload: users,
});

export const setUsersFailed = message => ({
  type: FETCH_USERS_FAILED,
  payload: message,
});
