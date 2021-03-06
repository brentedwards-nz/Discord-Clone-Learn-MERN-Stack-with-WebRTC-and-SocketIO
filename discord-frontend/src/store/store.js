import {composeWithDevTools} from 'redux-devtools-extension';
import { combineReducers, applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import authReducer from './reducers/authReducer'

// const rootReducer = combineReducers({
    // auth: authReducer,
// });
// 
// const store = configureStore(
    // rootReducer,
    // composeWithDevTools(applyMiddleware(thunk))
// )

const store = configureStore({
    reducer:{
       auth: authReducer,
    }
  })

export default store;