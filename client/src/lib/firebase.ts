// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVjEztsxcWSN9Ilk8SeXsuj6mSXfUfN_g",
  authDomain: "velan-spaces-constructions.firebaseapp.com",
  projectId: "velan-spaces-constructions",
  storageBucket: "velan-spaces-constructions.firebasestorage.app",
  messagingSenderId: "502284969422",
  appId: "1:502284969422:web:dddd5ab7ba5236ca8b779f",
  measurementId: "G-4T7H6LRNFX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
