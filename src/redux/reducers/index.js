import {combineReducers} from 'redux';

import todos from './todos';
import users from './users';

const rootReducer = combineReducers({
  todoReducer: todos,
  userReducer: users,
});

export default rootReducer;
