// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBeulY7D9lz2vjUnRlpBeNHiCEB-4ZXx9Q",
  authDomain: "chat-app-26422.firebaseapp.com",
  projectId: "chat-app-26422",
  storageBucket: "chat-app-26422.appspot.com",
  messagingSenderId: "801621214963",
  appId: "1:801621214963:web:100b7f547eddc61de39986",
  measurementId: "G-VZ37PXF54W",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
