// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyeSiuqXgc8WPK8TPKjRmWw7F6_jqqbhI",
  authDomain: "book-com.firebaseapp.com",
  projectId: "book-com",
  storageBucket: "book-com.appspot.com",
  messagingSenderId: "33759371215",
  appId: "1:33759371215:web:25248142af12eb4a97bcba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);