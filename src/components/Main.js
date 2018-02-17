import React, { Component } from "react";
import {
  Route,
  BrowserRouter,
  Switch
} from "react-router-dom";
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import  {LinkContainer, IndexLinkContainer} from 'react-router-bootstrap';

import Home from "./Home";
import TodoList from "../containers/TodoList";
import About from "./About";

export default class Main extends Component {
 render() {
   return (
    <BrowserRouter>
        <div className="container">
          <h1>Simple SPA</h1>
          <Navbar>
            <Nav>
              <IndexLinkContainer to="/">
                <NavItem>Home</NavItem>
              </IndexLinkContainer>
              <LinkContainer to="/todo">
                <NavItem>Todo List</NavItem>
              </LinkContainer>
              <LinkContainer to="/about">
                <NavItem>About Us</NavItem>
              </LinkContainer>
            </Nav>
          </Navbar>
          
          <div className="content">
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/todo" component={TodoList}/>
              <Route path="/about" component={About}/>
            </Switch>
          </div>
        </div>
    </BrowserRouter>
   );
 }
}