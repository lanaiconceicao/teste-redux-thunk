import { combineReducers } from 'redux';
import { myReducer } from './myReducer';
import { reducer } from './myReducer';

const rootReducer = combineReducers({ myReducer, reducer });

export default rootReducer;
