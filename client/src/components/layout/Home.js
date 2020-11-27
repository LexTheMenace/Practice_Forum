import React, { useContext } from 'react'
import { ForumContext } from '../../context/forumContext'

export default function Jumbotron() {
  
  const [state, dispatch] = useContext(ForumContext);
  const { user } = state;

  const getLoginUrl = () => {
    if(window.location.hostname === 'localhost') {
      return 'http://localhost:3000/auth/google'
    } else {
      return 'http:deployed.url'
    }
  }
  const getButton = () => {
    if (user && user !== null) {
      return <a className="btn btn-primary btn-lg" href='http://localhost:3001/#/forum' role="button">Go To Forum</a>
 } else { 
      return <a className="btn btn-primary btn-lg" href={getLoginUrl()} role="button">Log In With Google!</a>
 }
  }

    return (
        <div className="jumbotron">
        <h1 className="display-3">Seasons Greetings!</h1>
        <p className="lead">Welcome to The forum! </p>
        <hr className="my-4"/>
        <p>Let's Get Started!</p>
        <p className="lead">
          {getButton()}
        </p>
      </div>
    )
}
