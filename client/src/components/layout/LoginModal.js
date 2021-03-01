import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { registerNewUser, loginExistingUser } from '../../API';

const LoginModal = ({ display }) => {
    const [login, setLogin] = useState(true);
    const [display_name, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');


    const loginUser = async () => {
        if (!display_name || !password) alert('Must Fill All Fields');
        const user = {
            display_name,
            password
        };

        //LOGIN 
        const token = await loginExistingUser(user);
        if (token) {
            //Clear fields
            window.location.hash = `/login/token/${token}` 
        }
    }

    const registerUser = async () => {
        if (!display_name || !password) alert('Must Fill All Fields');
        if (password !== password2) alert('Passwords Do Not Match');
        if (password.length < 4) alert('Password Must be At Least 4 characters');

        const newUser = {
            display_name,
            password,
            password2
        };
        
        const token = await registerNewUser(newUser);
        if (token) {
            //Clear fields
            window.location.hash = `/login/token/${token}` 
        }
    }



    return (
        <div className="modal" style={{ display: 'none' }} id='modal' >
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header ">
                        <h5 className="modal-title">{login ? 'Login' : 'Register'} with Username</h5>
                        <button type="button" onClick={() => document.getElementById('modal').style.display = 'none'} className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="form-group row">
                            <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Username </label>
                            <div className="col-sm-9">
                                <input onChange={(e) => setUsername(e.target.value)} type="text" className="form-control-plaintext" id="staticEmail" value={display_name} placeholder="Enter your username e.g.'codingwhiz', 'rocketman' " />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Password </label>
                            <div className="col-sm-9">
                                <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder='****' className="form-control-plaintext" id="password" value={password} />
                            </div>
                        </div>
                        {!login &&
                            <div id='reg_options'>
                                <div className="form-group row">
                                    <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Confirm Password </label>
                                    <div className="col-sm-9">
                                        <input onChange={(e) => setPassword2(e.target.value)} id='password_confirm' type="password" placeholder='****' className="form-control-plaintext" id="password2" value={password2} />
                                    </div>
                                </div>
                            </div>
                        }


                    </div>
                   { login ? <small id='modal-warning'> Don't have an account?  Forgot your username/password? <Link to='#' onClick={() => setLogin(false)} > Register Here! </Link>  </small> :  <small id='modal-warning'> Already have an account?  <Link to='#' onClick={() => setLogin(true)} > Log in Here! </Link> </small>}
                    <div className="modal-footer">
                        <button onClick={ login ? loginUser : registerUser } type="button" className="btn btn-success">
                            Login
        </button>
                        <button type="button" className="btn btn-danger"
                            onClick={() => document.getElementById('modal').style.display = 'none'}
                            data-dismiss="modal" >
                            Back </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginModal;