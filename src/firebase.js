// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVbPBVO9GiTlKXMb8OTtTVgWOb964Uwbk",
  authDomain: "qwetu-15fe9.firebaseapp.com",
  projectId: "qwetu-15fe9",
  storageBucket: "qwetu-15fe9.appspot.com",
  messagingSenderId: "262265791370",
  appId: "1:262265791370:web:0ac4bd358cc264ae2ade73",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
