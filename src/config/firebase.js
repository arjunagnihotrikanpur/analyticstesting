import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCdv5LPiNPZDZxpZ5vhbIqDIyIx9ZFefIA",
  authDomain: "analy-d9c22.firebaseapp.com",
  projectId: "analy-d9c22",
  storageBucket: "analy-d9c22.appspot.com",
  messagingSenderId: "107759958836",
  appId: "1:107759958836:web:33b96526cbb901b4094361",
  measurementId: "G-N249PRNN04"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);