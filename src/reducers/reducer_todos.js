import {FETCH_ITEMS, SAVE_ITEM, CREATE_ITEM} from '../actions/index';

export default function(state = [], action) {
  switch(action.type){
    case FETCH_ITEMS: 
      return action.payload.data.todos;
    case SAVE_ITEM:
      return state.map(item => {
        if(item.id === action.payload.data.todo.id) {
          return action.payload.data.todo;
        }
        return item;
      });
    case CREATE_ITEM:
      let newState = state.slice();
      newState.push(action.payload.data.todo);
      return newState;
    default: return state;
  }
}