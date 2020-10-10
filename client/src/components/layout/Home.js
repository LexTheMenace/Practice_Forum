import React, { useContext, useEffect } from 'react'
import { Context } from '../../context'

export default function Jumbotron() {
  
  const context = useContext(Context);
  const { user } = context.state;
 
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
        <h1 className="display-3">Howdy Y'all!</h1>
        <p className="lead">Welcome to Kia's Corner! </p>
        <hr className="my-4"/>
        <p>We all on a journey to improve ourselves, come kick it with me!</p>
        <p className="lead">
          {getButton()}
        </p>
      </div>
    )
}
