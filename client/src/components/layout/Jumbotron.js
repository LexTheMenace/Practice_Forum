import React from 'react'

export default function Jumbotron() {
  const getLoginUrl = () => {
    if(window.location.hostname === 'localhost') {
      return 'http://localhost:3000/auth/google'
    } else {
      return 'http:deployed.url'
    }
  }
    return (
        <div class="jumbotron">
        <h1 class="display-3">Howdy Y'all!</h1>
        <p class="lead">Welcome to Kia's Corner! </p>
        <hr class="my-4"/>
        <p>We all on a journey to improve ourselves, come kick it with me!</p>
        <p class="lead">
          <a class="btn btn-primary btn-lg" href="#" role="button">Sign Up</a>
          <a class="btn btn-primary btn-lg" href={getLoginUrl()} role="button">Log In</a>

        </p>
      </div>
    )
}
