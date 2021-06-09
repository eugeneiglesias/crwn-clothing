import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAzS3dwFyxvQ2yPRaXYCMYjQpAGWvpzysk",
  authDomain: "crwn-db-d8dab.firebaseapp.com",
  projectId: "crwn-db-d8dab",
  storageBucket: "crwn-db-d8dab.appspot.com",
  messagingSenderId: "622205206012",
  appId: "1:622205206012:web:e9765151e4b4affa888679",
  measurementId: "G-R3TR0SZY8R",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
