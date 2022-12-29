import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import "firebase/database";
import "firebase/storage";
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyBeulY7D9lz2vjUnRlpBeNHiCEB-4ZXx9Q",
  authDomain: "chat-app-26422.firebaseapp.com",
  projectId: "chat-app-26422",
  storageBucket: "chat-app-26422.appspot.com",
  messagingSenderId: "801621214963",
  appId: "1:801621214963:web:100b7f547eddc61de39986",
  measurementId: "G-VZ37PXF54W",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
