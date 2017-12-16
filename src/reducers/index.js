import {combineReducers} from 'redux';

import TodoReducer from './reduce-todo';

const allReducers = combineReducers({
  todos: TodoReducer
});

export default allReducers;