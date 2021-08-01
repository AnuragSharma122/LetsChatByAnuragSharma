import React from 'react'
import "./Login.css";
import Letschatlogo from  './Letschatlogo.png';
import profile from './profile.jpg'
import {Button} from "@material-ui/core";
import {auth, provider} from './firebase';
import { actionTypes } from './reducer';
import { useStateValue } from './StateProvider';

function Login() {
    const [{},dispatch] = useStateValue();
    const signIn = () =>{
        auth.signInWithPopup(provider)
            .then(result => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                })
            } )
            .catch(error=>alert(error.message));
    };

    return (
        <div className="login">
            <div class="login__container">
                <img 
                    src={Letschatlogo} alt=""
                 />
                <div class="login__text">
                    <h1>Sign to LetsChat</h1>
                </div>
                <Button  onClick={signIn}>Sign In With Google
                </Button>

                <div class="login__footer">
                    <h1>Created By Anurag Sharma</h1>
                    <img 
                    src={profile} alt=""
                 />
                </div>

            </div>
        </div>
    )
}

export default Login
