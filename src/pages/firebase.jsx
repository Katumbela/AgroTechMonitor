// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgxc9jDvjM9NzpDinJ2WdUckSVnf1vAH8",
  authDomain: "freelangola.firebaseapp.com",
  databaseURL: "https://freelangola-default-rtdb.firebaseio.com",
  projectId: "freelangola",
  storageBucket: "freelangola.appspot.com",
  messagingSenderId: "856024122438",
  appId: "1:856024122438:web:569bbc53e180987773f647",
  measurementId: "G-RHF07QEXZK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);