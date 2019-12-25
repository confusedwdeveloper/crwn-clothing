import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCpVahUBsPQE6BH2Ai5A1qrEcI109VAq8k",
  authDomain: "crwn-db-73c4b.firebaseapp.com",
  databaseURL: "https://crwn-db-73c4b.firebaseio.com",
  projectId: "crwn-db-73c4b",
  storageBucket: "crwn-db-73c4b.appspot.com",
  messagingSenderId: "55643326528",
  appId: "1:55643326528:web:7a4295727e4f14f3fd37a5",
  measurementId: "G-M6905WHH6Z"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// set up google authentication utility

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});

//sign in with google method
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
