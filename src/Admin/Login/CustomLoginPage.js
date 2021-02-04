// LoginPage.js
import React from 'react';
import { Login, LoginForm } from 'react-admin';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
// import * as firebaseAuth from 'firebase/auth';
// import ForgotPasswordButton from "./CustomForgotPassword";

const uiConfig = {
  signInFlow: 'popup',
  signInSuccessUrl: '#/',
  signInOptions: [
    // firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
  ],
};

const SignInScreen = () => (
  <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
);

const CustomLoginForm = (props) => (
  <div>
    <LoginForm {...props} />
    {/* <ForgotPasswordButton {...props} /> */}
    <SignInScreen />
  </div>
);

const CustomLoginPage = (props) => (
  <Login {...props}>
    <CustomLoginForm {...props} />
  </Login>
);

export default CustomLoginPage;
