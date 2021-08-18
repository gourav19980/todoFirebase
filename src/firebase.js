// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyA5D59cEWnCbDaVgpHmgoOgEDwyUujmaWk",
//   authDomain: "todo-app-b016a.firebaseapp.com",
//   projectId: "todo-app-b016a",
//   storageBucket: "todo-app-b016a.appspot.com",
//   messagingSenderId: "821269546133",
//   appId: "1:821269546133:web:e6f04f436a5346de5f479c",
//   measurementId: "G-9TMND2B2Y4",
// };

import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyA5D59cEWnCbDaVgpHmgoOgEDwyUujmaWk",
  authDomain: "todo-app-b016a.firebaseapp.com",
  projectId: "todo-app-b016a",
  storageBucket: "todo-app-b016a.appspot.com",
  messagingSenderId: "821269546133",
  appId: "1:821269546133:web:e6f04f436a5346de5f479c",
  measurementId: "G-9TMND2B2Y4"
});

const db = firebaseApp.firestore();

export default db;