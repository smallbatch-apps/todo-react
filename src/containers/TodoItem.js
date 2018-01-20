import React, { Component } from "react";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {selectEditItem, saveItem} from '../actions/index';

class TodoItem extends Component {

  constructor(props){
    super(props);
    this.state = {
      checked: props.item ? props.item.checked : false,
      title: props.item ? props.item.title : ''
    }
  }

  defaultList() {
    const icon = this.state.checked ? 'check-square-o' : 'square-o';
    const id = this.props.item.id;
    return <div>
      <i onClick={() => this.checkItem()} className={`fa fa-item fa-fw fa-${icon}`}></i>
      {this.props.item.title}
      <i className="fa fa-item fa-pencil fa-fw pull-right edit-link" onClick={() => this.props.selectEditItem(id)}></i>
    </div>
  }

  checkItem() {
    let item = this.props.item;
    this.setState({checked: !this.state.checked}, () => {
      item.checked = this.state.checked;
      this.props.saveItem(this.props.item);
    });
  }

  editForm() {
    return <div>
      <div className="form-group">
        <input type="text" 
          value={this.state.title} 
          className="form-control" 
          onChange={event => this.setState({title: event.target.value})} 
          />
      </div>
      <div className="form-group">
        <button className="btn btn-info" onClick={() => this.update()}><i className="fa fa-icon fa-cloud-upload" /> Save</button>
        <i className="fa fa-times pull-right" onClick={() => this.props.selectEditItem(null)} />
      </div>
    </div>
  }

  update() {
    let item = this.props.item;
    item.title = this.state.title;
    this.props.saveItem(item);
  }
  
  isCurrentItem() {
    return this.props.currentItem === this.props.item.id;
  }

  render() {
    const mainContent = this.isCurrentItem() ? this.editForm() : this.defaultList();
    
    return <li className="list-group-item">
      {mainContent}
    </li>
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({selectEditItem, saveItem}, dispatch);
}

export default connect(null, mapDispatchToProps)(TodoItem);