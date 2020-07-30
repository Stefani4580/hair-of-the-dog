import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyA5GKF_SPRZ4Rbe9H1dNrhkVS0qT_M5ybg",
  authDomain: "hair-of-the-dog-c976c.firebaseapp.com",
  databaseURL: "https://hair-of-the-dog-c976c.firebaseio.com",
  projectId: "hair-of-the-dog-c976c",
  storageBucket: "hair-of-the-dog-c976c.appspot.com",
  messagingSenderId: "872903766491",
  appId: "1:872903766491:web:7a1b94c4b844d5e7d337fe",
  measurementId: "G-B7D8R6R9G6",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {db, auth, storage}; 
