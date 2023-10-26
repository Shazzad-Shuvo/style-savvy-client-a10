// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDW-WuL-TTnIdolO5P6fx_89gavw_KRhZU",
  authDomain: "style-savvy-600b6.firebaseapp.com",
  projectId: "style-savvy-600b6",
  storageBucket: "style-savvy-600b6.appspot.com",
  messagingSenderId: "59489611730",
  appId: "1:59489611730:web:fc032a0fca8e0df8b2220b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;