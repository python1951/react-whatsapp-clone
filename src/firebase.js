import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCLVLt72TKsl8NCpkJaeLvCZ8zJ_U4RJMs",

  authDomain: "whastapp-clone-dd63e.firebaseapp.com",

  databaseURL: "https://whastapp-clone-dd63e-default-rtdb.firebaseio.com",

  projectId: "whastapp-clone-dd63e",

  storageBucket: "whastapp-clone-dd63e.appspot.com",

  messagingSenderId: "751012836825",

  appId: "1:751012836825:web:8b46f1918c56d08d0a55c8",

  measurementId: "G-2V7FPL8DJF",
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
