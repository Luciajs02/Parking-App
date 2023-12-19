// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { initializeApp } from "firebase/app";
import {getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "",
  authDomain: "brno-inn.firebaseapp.com",
  projectId: "brno-inn",
  storageBucket: "brno-inn.appspot.com",
  messagingSenderId: "576983149504",
  appId: ""
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app); 

export { db };