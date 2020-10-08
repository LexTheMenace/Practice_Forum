import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import "bootswatch/dist/slate/bootstrap.css";
import AppNav from './components/layout/AppNav';
import Jumbotron from './components/layout/Jumbotron';
import LoginToken from './components/LoginToken';
import { Provider } from './context';

class App extends Component {
  render(){

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
      </div>
        </Switch>
    </Router> 
    </Provider>


);
}
}

export default App;
