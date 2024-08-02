// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail, signOut, } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDaKCGo9eYsnzMqlqJ8B_6GRL8Vvwyhrjw",
  authDomain: "imabhisht-test-app.firebaseapp.com",
  projectId: "imabhisht-test-app",
  storageBucket: "imabhisht-test-app.appspot.com",
  messagingSenderId: "839296702514",
  appId: "1:839296702514:web:be7a770c06f18fcb26442b",
  measurementId: "G-TSTX1DF7F5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const analytics = getAnalytics(app);