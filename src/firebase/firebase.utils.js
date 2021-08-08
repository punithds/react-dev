import firebase from "firebase/app";
import "firebase/firestore"
import "firebase/auth"

const config = {
    apiKey: "AIzaSyB_yg_6tB3cFOwb6pMAKzbSSA7S2ulG8Pw",
    authDomain: "crwn-db-393bb.firebaseapp.com",
    projectId: "crwn-db-393bb",
    storageBucket: "crwn-db-393bb.appspot.com",
    messagingSenderId: "975702302236",
    appId: "1:975702302236:web:d91cea19e447af7c5949d9",
    measurementId: "G-XY9PPCS50C"
};


firebase.initializeApp(config);

export const auth =firebase.auth();
export const firestore =firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt:"select_account"});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;


