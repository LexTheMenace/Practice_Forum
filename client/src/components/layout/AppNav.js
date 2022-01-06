import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LOGOUT } from '../../actions/types';
import { useStoreContext } from '../../context/Store';

const AppNav = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen(!open);
  const { user, dispatch } = useStoreContext();
  const logout = () => {
    dispatch({type:LOGOUT});
    setOpen(false);
  }
  return (
    <nav style={{marginBottom: '10px'}} className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">Lex's Forum</Link>
        <button onClick={toggle} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="true" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className={`navbar-collapse collapse ${open ? 'show' : 'hide'} `} id="navbarColor02">
    <ul className="navbar-nav ml-auto">
      <li className={`nav-item ${window.location.hash === '#/' ? 'active' : ''}`}>
        <Link className="nav-link" to="/" onClick={() => setOpen(false)}>Home</Link>
      </li>
      <li className={`nav-item ${window.location.pathname === '#/forum' ? 'active' : ''}`}>
        <Link className="nav-link" to="/forum" onClick={() => setOpen(false)}>Forum </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link disabled" to="/chat" >Chat (Coming Soon!)</Link>
      </li>
      <li className={`nav-item`}>
        <Link className="nav-link" to="/" onClick={() => logout()}>Logout </Link>
      </li>
   {/*    {user && 
        <li className="nav-item">
        <Link className="nav-link disabled" to={`/user/${user._id}`} >Profile { user.display_name}</Link>
      </li>} */}
{/*     { check if user is admin and render admin link &&
 <li className="nav-item">
 <Link className="nav-link" to="/">Admin</Link>
</li>
    }  */}
    </ul>
  </div>
      </nav>
    )
  }
  
  export default AppNav; 