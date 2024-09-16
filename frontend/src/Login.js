import React from 'react';
import './Login.css';
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
   const { loginWithRedirect } = useAuth0();
  
   return <button onClick={() => loginWithRedirect()}>Patient Log In</button>;
 };
 
 export default LoginButton;