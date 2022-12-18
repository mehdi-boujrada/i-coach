
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCZzcVr4NDaMKpqnqvUfSIqKzSGjHhNz00",
  authDomain: "i-coach-37493.firebaseapp.com",
  projectId: "i-coach-37493",
  storageBucket: "i-coach-37493.appspot.com",
  messagingSenderId: "511203042843",
  appId: "1:511203042843:web:be713efcd6c09b7bfebabe",
  measurementId: "G-ZSBY9XH4EN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);