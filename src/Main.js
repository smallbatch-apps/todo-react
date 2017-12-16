import React, { Component } from "react";
import {
  Route,
  BrowserRouter
} from "react-router-dom";
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import  {LinkContainer} from 'react-router-bootstrap';

import Home from "./Home";
import TodoList from "./TodoList";
import About from "./About";

export default class Main extends Component {
 render() {
   return (
    <BrowserRouter>
        <div className="container">
          <h1>Simple SPA</h1>
          <Navbar>
            <Nav>
              <LinkContainer to="/home">
                <NavItem>Home</NavItem>
              </LinkContainer>
              <LinkContainer to="/todo">
                <NavItem>Todo List</NavItem>
              </LinkContainer>
              <LinkContainer to="/about">
                <NavItem>About Us</NavItem>
              </LinkContainer>
            </Nav>
          </Navbar>
          
          <div className="content">
            <Route exact path="/home" component={Home}/>
            <Route path="/todo" component={TodoList}/>
            <Route path="/about" component={About}/>
          </div>
        </div>
    </BrowserRouter>
   );
 }
}