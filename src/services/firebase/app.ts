// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAckNtonObKKjAVx1HsYLROT9gH_brpjlA",
  authDomain: "project-demo-18310.firebaseapp.com",
  databaseURL: "https://project-demo-18310.firebaseio.com",
  projectId: "project-demo-18310",
  storageBucket: "project-demo-18310.appspot.com",
  messagingSenderId: "764104046491",
  appId: "1:764104046491:web:ef3408cf0f95698f6c133e",
  measurementId: "G-GDDPFNJ5K1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { auth };
export default app;
