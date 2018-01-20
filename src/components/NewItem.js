import React, { Component } from "react";

export default class NewItem extends Component {

  constructor() {
    super();
    this.state = {
      isEditing: false,
      title: ''
    }
  }

  form(){
    return (
      <form>
        <div className="form-group">
        <input type="text" 
          value={this.state.title} 
          className="form-control" 
          onChange={event => this.setState({title: event.target.value})} 
          />
      </div>
      <div className="form-group">
        <div className="btn btn-info" onClick={() => this.save()}>Save</div>
        <i className="fa fa-times pull-right" onClick={event => this.setState({'isEditing': false, title: ''})} />
      </div>
      </form>
    )
  }

  save() {
    this.props.create(this.state.title);
    this.setState({'isEditing': false, title: ''});
  }

  button() {
    return (
      <button className="btn btn-primary" 
        onClick={event => this.setState({'isEditing': true})}
        ><i className="fa fa-icon fa-plus-circle" /> Add Item
      </button>
    )
  }

  render() {
    const content = this.state.isEditing ? this.form() : this.button() ;
    return (
      <li className="list-group-item">
        {content}
      </li>
    );
  }
}