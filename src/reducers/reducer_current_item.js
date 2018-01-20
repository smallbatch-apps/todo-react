import {SELECT_EDIT_ITEM, SAVE_ITEM} from '../actions/index';

export default function(state = null, action){
  switch(action.type){
    case SELECT_EDIT_ITEM:
      return action.payload;
    case SAVE_ITEM:
      return null;
    default: 
      return state;
  }
}