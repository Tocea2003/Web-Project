// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {
  collection,
  addDoc,
  getDocs,
  serverTimestamp,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAdfS4UZkfD5YNjWTMec431AzU0MVRR9Ck",
  authDomain: "smart-camps-sibiu.firebaseapp.com",
  databaseURL: "https://smart-camps-sibiu-default-rtdb.firebaseio.com/",
  projectId: "smart-camps-sibiu",
  storageBucket: "smart-camps-sibiu.appspot.com",
  messagingSenderId: "702638774123",
  appId: "1:702638774123:web:8dad7b2f1d5200668cde2e",
  measurementId: "G-QF5ZJMP198",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const GoogleProvider = new GoogleAuthProvider();

export {
  app,
  auth,
  GoogleProvider,
  db,
  collection,
  addDoc,
  getDocs,
  serverTimestamp,
};
