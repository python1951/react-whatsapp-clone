import { Button } from "@material-ui/core";
import React from "react";
import { auth, provider } from "./firebase";
import "./Login.css";
import { useStateValue } from "./StateProvider";
import {actionTypes} from "./reducer";
function Login() {
    const [{},dispatch] = useStateValue();
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => dispatch({
          type:actionTypes.SET_USER,
          user:result.user,
      }))
      .catch((error) => alert(error.message));
  };

  return (
    <div className='login'>
      <div className='login__Container'>
        <img
          src='https://static.whatsapp.net/rsrc.php/ym/r/36B424nhiL4.svg'
          alt=''
        />

        <div className='login__Info'>
          <h1>Sign in to Whatsapp</h1>
        </div>
        <Button onClick={signIn}>Sign in with Google</Button>
      </div>
    </div>
  );
}

export default Login;
