import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics"; 

const firebaseConfig = {
  apiKey: "AIzaSyCwrwg8YLmB4bfnCE2hVKoPgNC5DOT-GTY",
  authDomain: "delivery-2db0f.firebaseapp.com",
  databaseURL: "https://delivery-2db0f-default-rtdb.firebaseio.com",
  projectId: "delivery-2db0f",
  storageBucket: "delivery-2db0f.appspot.com",
  messagingSenderId: "1010830519544",
  appId: "1:1010830519544:web:dfc2e7c57998d103d65f0d",
  measurementId: "G-4NX5F2BQNY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);