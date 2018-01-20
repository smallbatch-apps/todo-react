import React, { Component } from "react";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import TodoItem from './TodoItem';
import NewItem from '../components/NewItem';
import {fetchItems, createItem} from '../actions/index';

class TodoList extends Component {
  
  componentDidMount() {
    this.props.fetchItems();
  }

  create(title) {
    this.props.createItem(title);
  }

  renderList() {

    return this.props.todos.map((todo, index) => (
      <TodoItem key={index} item={todo} currentItem={this.props.currentItem} />
    ));
  }

  render() {
    return (
      <div>
        <h2>Todo List</h2>

        <p>Mauris sem velit, vehicula eget sodales vitae, rhoncus eget sapien</p>
        
        <ul className="list-group">
          {this.renderList()}
          <NewItem create={this.create.bind(this)} />
        </ul>
     </div>
   );
 }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchItems, createItem}, dispatch);
}

function mapStateToProps(state){
  return {
    todos: state.todos,
    currentItem: state.currentItem
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);