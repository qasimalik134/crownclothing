import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyBYXJfnIvcj4Q5xljqm-LZUaVdVYJdL2Hs",
    authDomain: "crwn-db-a49ae.firebaseapp.com",
    projectId: "crwn-db-a49ae",
    storageBucket: "crwn-db-a49ae.appspot.com",
    messagingSenderId: "1004010091877",
    appId: "1:1004010091877:web:ea953acc302d5c3337dd8c",
    measurementId: "G-BT9EK8PVH4",
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;