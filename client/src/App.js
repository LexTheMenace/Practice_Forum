import React from 'react';
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom';
import "bootswatch/dist/slate/bootstrap.css";
import './App.css';
import AppNav from './components/layout/AppNav';
import Jumbotron from './components/layout/Home';
import LoginToken from './components/layout/LoginToken';
import Admin from './components/layout/Admin'
import Category from './components/Category';
import Forum from './components/layout/Forum';
import Topic from './components/Topic';
import { useStoreContext } from "./context/Store";
import { ForumContextProvider } from './context/forumContext';
import { isAdmin } from './actions/authActions';

const App = () => {
  const { user } = useStoreContext();

  return (
    <Router>
      <AppNav />
      <div className="container">
        <Switch>
          <Route path='/login/token/:token'>
            <LoginToken />
          </Route>
          <Route exact path='/'>
            <Jumbotron />
          </Route>
          {user &&
            <ForumContextProvider>
              <Switch>
                <Route exact path='/admin' render={() => isAdmin(user) ? <Admin /> : <Jumbotron />} />
                <Route exact path='/forum'>
                  <Forum />
                </Route>
                <Route exact path='/p/:name/replies/:id'>
                  <Topic />
                </Route>
                <Route exact path='/p/:name'>
                  <Category />
                </Route>
                <Route path='*'>
                  <h2>Not Found</h2>
                </Route>
              </Switch>
            </ForumContextProvider>}
          <Route path='*'>
            <h2>Not Logged In</h2>
            <Link to='/'>Back to Home</Link>
            {/* Redirect to Home Component */}
          </Route>
        </Switch>
      </div>
    </Router>


  );
}


export default App;
