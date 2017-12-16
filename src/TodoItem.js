import React, { Component } from "react";
import {editTodo} from './actions/index';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

class TodoItem extends Component {

  constructor() {
    super();
    this.state = {
      isEditing: false 
    }
  }

  // componentWillMount(){
  //   this.setState({item: this.props.item});
  // }

  // _setIsEditing(isEditing){
  //   this.setState({isEditing});
  // }

  // handleTitleChange = (event) => {
  //   const item = Object.assign({}, this.state.item, {title: event.target.value});
  //   this.setState({ item });
  // };
  
  // handleSaveButton = (event) => {
  //   this.props.saveAction(this.state.item);
  //   this.setState({isEditing: false});
  // };

  defaultList() {
    return <div>
      <i className="fa fa-item fa-check-square-o fa-fw"></i>
      {this.props.item.title}
      <i className="fa fa-item fa-pencil fa-fw pull-right edit-link" onClick={() => this.props.editTodo()}></i>
    </div>
  }

  editForm() {
    return <div>
      <div className="form-group">
        <input type="text" value={this.state.item.title} className="form-control" onChange={this.handleTitleChange} />
      </div>
      <div className="form-group">
        <button className="btn btn-info" onClick={this.handleSaveButton}>Save</button>
        <i className="fa fa-times pull-right" onClick={() => this._setIsEditing(false)} />
      </div>
    </div>
  }

  render() {
    const mainContent = this.state.isEditing ? this.editForm() : this.defaultList();

    return <li className="list-group-item">
      {mainContent}
    </li>
  }

}

function mapStateToProps(state) {
  return {
    todo: state.todo
  }
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({editTodo}, dispatch)
}

export default connect(matchDispatchToProps)(TodoItem);