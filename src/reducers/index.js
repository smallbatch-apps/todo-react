import {combineReducers} from 'redux';

import TodoReducer from './reducer_todos';
import CurrentItemReducer from './reducer_current_item';

const rootReducer = combineReducers({
  todos: TodoReducer,
  currentItem: CurrentItemReducer
});

export default rootReducer;