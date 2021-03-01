import React from 'react';
import { Link } from 'react-router-dom';
import { useStoreContext } from '../../context/Store';
import Login from './LoginModal';

const Home = () => {
  
  const { user } = useStoreContext();
  //GOOGLE LOGIN
  /* const getLoginUrl = () => {
    if(window.location.hostname === 'localhost') {
      return 'http://localhost:3000/auth/google'
    } else {
      return 'https://blooming-beyond-08989.herokuapp.com/auth/google'
    }
  } */

  const getLoginUrl = () => {
    if(window.location.hostname === 'localhost') {
      return 'http://localhost:5000'
    } else {
      return 'https://lexs-forum.herokuapp.com'
    }
  }

  const getButton = () => {
    if (user && user !== null) {
      return <Link className="btn btn-primary btn-lg" to='/forum' role="button">Go To Forum</Link>
    } else { 
      return <span>{/* <a className="btn btn-primary btn-lg" href={`${getLoginUrl()}/auth/google` } role="button">Log In With Google!</a> 
     {' '}
      {/* <Link className="btn btn-primary btn-lg" to={`/login` }>Login With Email </Link> */}
      <button className="btn btn-primary btn-lg" onClick={() => document.getElementById('modal').style.display='block'}>Login With Username</button>
     {' '} 
     <a className="btn btn-primary btn-lg" href={`${getLoginUrl()}/api/v1/users/guest`} role='button' >Enter as Guest </a></span>
    }
  }
  
  return (
    <div className="jumbotron">
        <h1 className="display-3">Lex's Forum</h1>
        <p className="lead">Welcome to The forum! </p>
        {/* //Weather */}
        <hr className="my-4"/>
        <p>Let's Get Started!</p>      
        <p className="lead">
          {getButton()}
        </p>
        <Login/>
      </div>
    )
  }
  
  export default Home;