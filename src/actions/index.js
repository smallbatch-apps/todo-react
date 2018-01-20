import axios from 'axios';

export const FETCH_ITEMS = 'FETCH_ITEMS';

export function fetchItems(){
  const request = axios.get('http://todo-api.test/todos/');
  
  return {
    type: FETCH_ITEMS,
    payload: request
  }
}

export const SELECT_EDIT_ITEM = 'SELECT_EDIT_ITEM';

export function selectEditItem(payload) {
  return {
    type: SELECT_EDIT_ITEM,
    payload
  }
}

export const SAVE_ITEM = 'SAVE_ITEM';

export function saveItem(item) {
  const request = axios.put(`http://todo-api.test/todos/${item.id}`, {todo: item});

  return {
    type: SAVE_ITEM,
    payload: request
  }
}

export const CREATE_ITEM = 'CREATE_ITEM';

export function createItem(title) {
  console.warn('CREATING ITEM');
  const request = axios.post('http://todo-api.test/todos', {todo: {
    title,
    checked: false
  }});

  return {
    type: CREATE_ITEM,
    payload: request
  }
}

export const CHECK_ITEM = 'CHECK_ITEM';

export function checkItem(item){

  const request = axios.patch(`http://todo-api.test/todos/${item.id}`, {
    checked: !item.checked
  });

  return {
    type: CREATE_ITEM,
    payload: request
  }

}