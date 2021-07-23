import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers/index';
import mySaga from './sagas';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
// mount it on the Store
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);

// then run the saga
sagaMiddleware.run(mySaga);
export default store;
/*import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers/index';
import mySaga from './sagas';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
// mount it on the Store
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

// then run the saga
sagaMiddleware.run(mySaga);

// render the application

import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';


const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk)),
);*/
