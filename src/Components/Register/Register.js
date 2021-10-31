
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

const Register = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [ error, setError] = useState('');
    const [isLogin, setIsLogin] = useState(false);
    const auth = getAuth();

    const toggle = e =>{

        setIsLogin(e.target.checked);
    }
    const handleEmail = e =>{

        setEmail(e.target.value)

    }

    const handlePass = e =>{

        setPass(e.target.value)

    }


    const handleRegistration = e => {
        e.preventDefault();
        console.log(email, pass)
        if(pass.length<6){
            setError('Password must be at least 6 characters long')
            return;
        }
        if(!/(?=.*[A-Z].*[A-Z])/.test(pass)){
            setError('Password must contain two Uppercase');
            return;
        }
        
        isLogin? handleNewLogin(email, pass) : createNewUser(email, pass);

    }

    const handleNewLogin = (email, pass) => {

        signInWithEmailAndPassword (auth, email, pass)
        .then(result => {

            const user = result.user;
            console.log(user);
                setError('');
        
        })

        .catch(error => {

            setError(error.message);
        })

    }

    const createNewUser = (email, password) => {

        createUserWithEmailAndPassword(auth, email, pass)
        .then(result =>{
            const user = result.user;
            console.log(user);
            setError('');
        })

        .catch(error => {
            setError(error.message);
        })

    }

    return (
        <div>
            <div className="mb-4">
                <h2>{isLogin ? 'Please Login' : 'Please SignUp Here'}</h2>

                <form onSubmit={handleRegistration} className="container-fluid">
                    <div class="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label><br/>
                        <input onBlur={handleEmail} type="email"  id="exampleInputEmail1" required />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label><br/>
                        <input onBlur={handlePass} type="password"  id="exampleInputPassword1" required />
                    </div>

                    
                    
                    <div className="mb-3 form-check">
                        <input onChange={toggle} type="checkbox"  id="exampleCheck1"/>
                        <label className="form-check-label" htmlFor="exampleCheck1">Already Registered</label>
                    </div>
                    <div className="mb-3 form-check text-danger">{error}</div>
                    <p>Already have an account <Link to ="/signIn">Login</Link></p>
                    <button type="submit" className="btn btn-primary">{isLogin ? 'SignIn' : 'Sign Up'}</button>
                    <br/>
                </form>
                    
                    <h4>Or</h4>
                    
                    <button type="submit" className="btn btn-primary">Google Sign In</button>
            </div>

        </div>
        
    );
};

export default Register;