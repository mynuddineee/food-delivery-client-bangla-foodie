import React from 'react';

import { useHistory, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';


const Login = () => {

    const {signInUsingGoogle} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/home';

    const handleLogin = () => {

        signInUsingGoogle()
        .then (result => {

            history.push(redirect_url);

        })
    }

    return (
        <div>
            <div className="mb-4">
                <h2>Please SignIn Here</h2>

                <form  className="container-fluid">
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label><br/>
                        <input type="email"  id="exampleInputEmail1" required/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label><br/>
                        <input type="password"  id="exampleInputPassword1" required/>
                    </div>
                    
                    <button type="submit" className="btn btn-primary">Sign In</button>
                    <br/>
                    <h4>Or</h4>
                    
                <p>You don't have to an account <Link to ="/signUp">SignUp</Link></p>
                </form>
                <h4>Or</h4>
                <button onClick={handleLogin} type="submit" className="btn btn-primary">Google Sign In</button>
            </div>

        </div>
    );
};

export default Login;