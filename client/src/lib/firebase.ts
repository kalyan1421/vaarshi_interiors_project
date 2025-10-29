// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPa6bMo2ndgmkvNjO5tiOso3SkbB8mvjY",
  authDomain: "velan-spaces--constructions.firebaseapp.com",
  projectId: "velan-spaces--constructions",
  storageBucket: "velan-spaces--constructions.firebasestorage.app",
  messagingSenderId: "424960610431",
  appId: "1:424960610431:web:09a8ae5c3f2ede7c32af4a",
  measurementId: "G-8E7MD12NC4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
