// import firebase from 'firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
const config = {
  apiKey: 'AIzaSyAXEwySGfU4V69OAa8VPuh__i_BxHwUemY',
  authDomain: 'quiz-myprojectbride.firebaseapp.com',
  databaseURL: 'https://quiz-myprojectbride.firebaseio.com',
  projectId: 'quiz-myprojectbride',
  storageBucket: 'quiz-myprojectbride.appspot.com',
  messagingSenderId: '442276546168',
  appId: '1:442276546168:web:8ffcfac128a6d2f1ddcf8d',
  measurementId: 'G-HB4H7XS54X',
};
// Initialize Firebase
firebase.initializeApp(config);

export const auth = firebase.auth();

export const db = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();

// export default firebase;
