
  import firebase from "firebase";
  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAT4IL4EUHkdY0K00kTiNmrlDgTW5z9HkY",
    authDomain: "todo-app-cp-67731.firebaseapp.com",
    databaseURL: "https://todo-app-cp-67731.firebaseio.com",
    projectId: "todo-app-cp-67731",
    storageBucket: "todo-app-cp-67731.appspot.com",
    messagingSenderId: "1015047456485",
    appId: "1:1015047456485:web:4e2a753d839589f298760c",
    measurementId: "G-L9YRGSQVGF"
  });

  const db = firebaseApp.firestore();

  export default db;
