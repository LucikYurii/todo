import {
  FETCH_USERS,
  FETCH_USERS_FAILED,
  FETCH_USERS_SUCESS,
} from '../constants';
const initialState = {
  userList: [],
  loading: false,
  message: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return {...state, loading: true, message: ''};
    case FETCH_USERS_SUCESS:
      return {...state, userList: action.payload, loading: false, message: ''};
    case FETCH_USERS_FAILED:
      return {...state, userList: [], loading: false, message: action.payload};
    default:
      return state;
  }
};
