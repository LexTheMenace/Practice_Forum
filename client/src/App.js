import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import "bootswatch/dist/slate/bootstrap.css";
import AppNav from './components/layout/AppNav';
import Jumbotron from './components/layout/Home';
import LoginToken from './components/layout/LoginToken';
import { Provider } from './context';
import Admin from './components/layout/Admin'
import Category from './components/Category';
import Forum from './components/layout/Forum';
import Topic from './components/Topic';

class App extends Component {

  render() {

    return (
      <Provider>
        <Router>
          <AppNav />
          <Switch>
            <div className="container">
              <Route path='/login/token/:token'>
                <LoginToken />
              </Route>
              <Route exact path='/'>
                <Jumbotron />
              </Route>
              {/*  {value => {
          const { isLoggedIn } = value;
          function thids() {*/}
              <Route exact path='/admin' render={() => /* isLoggedIn() ?  */<Admin /> /* : <Jumbotron /> */} /> 
              <Route exact path='/forum'>
                <Forum />
              </Route>
              <Route exact path='/p/:name/replies/:id'>
                <Topic />
              </Route>
              <Route exact path='/p/:name'>
                <Category />
              </Route>
            </div>
          </Switch>
        </Router>
      </Provider>


    );
  }
}

export default App;
