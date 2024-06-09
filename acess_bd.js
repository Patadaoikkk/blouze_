// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCScrQCG0uDcNzdQY6s6d9bMZKkJ3oZsLg",
  authDomain: "blouze-b201d.firebaseapp.com",
  projectId: "blouze-b201d",
  storageBucket: "blouze-b201d.appspot.com",
  messagingSenderId: "61809314465",
  appId: "1:61809314465:web:0a3ba1346471aa577b3ee0",
  measurementId: "G-XHLMSSDQDF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);