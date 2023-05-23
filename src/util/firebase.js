import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

firebase.initializeApp({
  apiKey: process.env.GOOGLE_API_KEY,
  authDomain: 'guan-ke-shi-jian-biao.firebaseapp.com',
  databaseURL: 'https://guan-ke-shi-jian-biao-default-rtdb.firebaseio.com',
  projectId: 'guan-ke-shi-jian-biao',
  storageBucket: 'guan-ke-shi-jian-biao.appspot.com',
  messagingSenderId: '308786760354',
  appId: '1:308786760354:web:2c35f81a9863026a2c25fb',
  measurementId: 'G-TMHTL1XGMC',
});

export const auth = firebase.auth();

export const db = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
