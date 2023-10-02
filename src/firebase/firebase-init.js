// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUxLrWhL5-FgV5VwO2GT9lj66X2DrFkjw",
  authDomain: "simple-firebase-e3485.firebaseapp.com",
  projectId: "simple-firebase-e3485",
  storageBucket: "simple-firebase-e3485.appspot.com",
  messagingSenderId: "584762490037",
  appId: "1:584762490037:web:5a38c845809a7b61ab92fc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app