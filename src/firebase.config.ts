// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyBy7TaECJWXxB1xP6NagDzOcUiH5yb8kFs",
  authDomain: "pruebanestjs.firebaseapp.com",
  projectId: "pruebanestjs",
  storageBucket: "pruebanestjs.appspot.com",
  messagingSenderId: "576990332231",
  appId: "1:576990332231:web:9dd58aedfd108d190c7862",
  measurementId: "G-RKCRPTCCY5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const firebaseDataBase = getDatabase(app)