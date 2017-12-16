import React, { Component } from "react";
import TodoItem from './TodoItem';

import {connect} from "react-redux";

class TodoList extends Component {
  // constructor(){
  //   super();
  //   this.state = {
  //     todos: []
  //   }
  // }

  // async componentDidMount() {
  //   let request = await fetch('http://todo-api.dev/todos/');
  //   this.setState(await request.json());
  // }

  // updateItem = (todo) => {
  //   var todos = this.state.todos.map(item => {
  //       if(todo.id === item.id){
  //         return Object.assign({}, todo);
  //       }
  //       return item
  //   });
  //   this.setState({todos});
  //   fetch(`http://todo-api.dev/todos/${todo.id}`, {
  //     method: 'put',
  //     body: JSON.stringify({todo}),
  //     headers: {
  //       "Content-Type": "application/json"
  //     }
  //   });
  // }

  render() {
    return (
      <div>
        <h2>Todo List</h2>

        <p>Mauris sem velit, vehicula eget sodales vitae, rhoncus eget sapien</p>
        
        <ul className="list-group">
        {this.props.todos.map((todo, index) => (
          <TodoItem key={index} item={todo} saveAction={this.updateItem}></TodoItem>
        ))}
        </ul>
     </div>
   );
 }
}

function mapStateToProps(state) {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps)(TodoList);