import firebase from "firebase";
import 'firebase/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDffN2QcEUtaUI2daKRjdOEZe2Z3CU9jbQ",
    authDomain: "letschat-by-anurag-sharma.firebaseapp.com",
    projectId: "letschat-by-anurag-sharma",
    storageBucket: "letschat-by-anurag-sharma.appspot.com",
    messagingSenderId: "760081955867",
    appId: "1:760081955867:web:753dae9b6f8007f6c14cbe",
    measurementId: "G-Z0TEBQRQPK"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  
  export default db;