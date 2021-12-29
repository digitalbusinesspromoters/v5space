// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZiJcG9zT9g42MCtEYU90Pzdpkrs2frc4",
  authDomain: "v5space.firebaseapp.com",
  projectId: "v5space",
  storageBucket: "v5space.appspot.com",
  messagingSenderId: "744783537229",
  appId: "1:744783537229:web:ff0bc3e57587af75cfa804",
  measurementId: "G-X31JVVEDXL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db=getFirestore()

export {db}