import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { connect } from 'react-redux'

import About from "./components/About";
import Notes from "./components/Notes";
import Note from "./components/Note";
import NewForm from "./components/NewForm";
import EditForm from "./components/EditForm";
import TopBar from "./components/TopBar";
import styled from "styled-components";

import Authenticated from './components/Authenticated'
import Public from './components/Public'
import Login from './pages/Login'
import HandleLogin from './pages/HandleLogin'
import Logout from './pages/Logout'
import Landing from './pages/Landing'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
  border-top: 1px solid rgb(234, 237, 232);
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopBar />
        <Container>
          {
            (user.isAuthenticated)
              ? <Authenticated exact path="/" name="home" component={Notes} />
              : <Public exact path='/' name="home" component={Landing} />
          }
          <Switch>
            <Route exact path="/" render={props => <Notes {...props} />} />
            <Route
              exact
              path="/note/:id"
              render={props => <Note {...props} />}
            />
            <Route path="/new-note" render={props => <NewForm {...props} />} />
            <Route
              path="/note/:id/edit"
              render={props => <EditForm {...props} />}
            />
            <Route path="/about" component={About} />
            <Route exact path='/logout' component={Logout} />
            <Public path='/login' exact name='login' component={Login} />
            <Public path='/handle-login' name='handle-login' component={HandleLogin} />
          </Switch>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(App);
