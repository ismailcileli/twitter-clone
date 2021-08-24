import firebase from "firebase";
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyDynk8rt-C4o2VcHPWl4oCTvtDTT86vkTE",
    authDomain: "twitter-clone-7ce29.firebaseapp.com",
    projectId: "twitter-clone-7ce29",
    storageBucket: "twitter-clone-7ce29.appspot.com",
    messagingSenderId: "885373856664",
    appId: "1:885373856664:web:b1857c7d5e61b5129859ed",
    measurementId: "G-Q6Z9KXYF88"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  const db = firebase.firestore();
  export default db;