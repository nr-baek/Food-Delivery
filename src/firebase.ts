// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth";
import "firebase/database";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2cnvcaVVGKgrm_ALl5PQ1w6sKITIRG4U",
  authDomain: "delivery-app-d94ea.firebaseapp.com",
  projectId: "delivery-app-d94ea",
  storageBucket: "delivery-app-d94ea.appspot.com",
  messagingSenderId: "19040683570",
  appId: "1:19040683570:web:01a49c10fe00dd0a0dde2b",
  measurementId: "G-1NJ346KJKF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export default app;
