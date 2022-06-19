import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";
import {getStorage} from '@firebase/storage'
import {getAuth} from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyC_b3m9Xeify9CAhuNmM0SVXVLfKWzjxEk",
  authDomain: "assisalesboxai.firebaseapp.com",
  projectId: "assisalesboxai",
  storageBucket: "assisalesboxai.appspot.com",
  messagingSenderId: "156817388685",
  appId: "1:156817388685:web:ddb90ef5021fcf9c8c9ec4",
  measurementId: "G-9HTXPN4CKJ"
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
