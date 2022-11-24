// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsY2pS7GCZ6ikMdWV5iPCLX9_zPWLfRbU",
  authDomain: "messagingapp-efb32.firebaseapp.com",
  projectId: "messagingapp-efb32",
  storageBucket: "messagingapp-efb32.appspot.com",
  messagingSenderId: "1076261313955",
  appId: "1:1076261313955:web:8ca736f8d5d551eefa8e16",
  measurementId: "G-HV5HD60PX5"
};

// Initialize Firebase
  const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// const analytics = getAnalytics(app);

// firebase.initializeApp(defaultAppConfig);
// console.log(firebase.app().name);

