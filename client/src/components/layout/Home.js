import React from 'react';
import { Link } from 'react-router-dom';
import { useStoreContext } from '../../context/Store';

const Home = () => {
  
  const {user } = useStoreContext();
  
  const getLoginUrl = () => {
    if(window.location.hostname === 'localhost') {
      return 'http://localhost:3000/auth/google'
    } else {
      return 'https://blooming-beyond-08989.herokuapp.com/auth/google'
    }
  }
  const getButton = () => {
    if (user && user !== null) {
      return <Link className="btn btn-primary btn-lg" to='/forum' role="button">Go To Forum</Link>
    } else { 
      return <a className="btn btn-primary btn-lg" href={getLoginUrl()} role="button">Log In With Google!</a>
    }
  }
  
  return (
    <div className="jumbotron">
        <h1 className="display-3">Seasons Greetings!</h1>
        <p className="lead">Welcome to The forum! </p>
        {/* //Weather */}
        <hr className="my-4"/>
        <p>Let's Get Started!</p>
        <p className="lead">
          {getButton()}
        </p>
      </div>
    )
  }
  
  export default Home;