import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const config = {
  apiKey: "AIzaSyBYXJfnIvcj4Q5xljqm-LZUaVdVYJdL2Hs",
  authDomain: "crwn-db-a49ae.firebaseapp.com",
  projectId: "crwn-db-a49ae",
  storageBucket: "crwn-db-a49ae.appspot.com",
  messagingSenderId: "1004010091877",
  appId: "1:1004010091877:web:ea953acc302d5c3337dd8c",
  measurementId: "G-BT9EK8PVH4",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    try {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.error("error while creating user.", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
