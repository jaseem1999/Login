import firebase from 'firebase/compat/app';

import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage'


const firebaseConfig = {
  apiKey: "AIzaSyC_b3m9Xeify9CAhuNmM0SVXVLfKWzjxEk",
  authDomain: "assisalesboxai.firebaseapp.com",
  projectId: "assisalesboxai",
  storageBucket: "assisalesboxai.appspot.com",
  messagingSenderId: "156817388685",
  appId: "1:156817388685:web:ddb90ef5021fcf9c8c9ec4",
  measurementId: "G-9HTXPN4CKJ"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();

const storage = firebase.storage();

export  { db , storage , firebaseApp };