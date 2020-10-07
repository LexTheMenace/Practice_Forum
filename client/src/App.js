import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import "bootswatch/dist/slate/bootstrap.css";
import AppNav from './components/layout/AppNav';
import Jumbotron from './components/layout/Jumbotron';
import LoginToken from './components/LoginToken';

function App() {
  console.log(window);
  return (
    <Router>
    <AppNav />
        <Switch>
      <div className="container">
          <Route path='/login/token/'>
            <LoginToken/>
          </Route>
          <Route exact path='/'>
            <Jumbotron />
          </Route>
      </div>
        </Switch>
    </Router>



  );
}

export default App;
