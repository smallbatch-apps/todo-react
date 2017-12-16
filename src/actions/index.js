export const GET_TODOS = 'GET_TODOS';
export const EDIT_TODO = 'EDIT_TODO';
export const SET_EDITING = 'SET_EDITING';

export const editTodo = (todo) => {
  console.log('event triggered');
  return {
    type: 'TODO_EDIT_CHANGE',
    payload: todo
  }
}

export async function getTodos() {
  return () => {
    let request = await fetch('http://todo-api.dev/todos/');
    return await request.json();
  }
}