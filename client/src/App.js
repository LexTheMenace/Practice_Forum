import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import "bootswatch/dist/slate/bootstrap.css";
import AppNav from './components/layout/AppNav';
import Jumbotron from './components/layout/Home';
import LoginToken from './components/LoginToken';
import { /* Context, */ Provider } from './context';
import Admin from './components/Admin'
/* import { onLoad } from './API' */
class App extends Component {
/* componentDidMount(){
  onLoad(Context)
}
   */
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
            </div>
          </Switch>
        </Router>
      </Provider>


    );
  }
}

export default App;
