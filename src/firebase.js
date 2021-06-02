import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB9_NtiY_YrUTlDDXni7oDltw3HiP-8K6E",
  authDomain: "linkedin-clone-aeccb.firebaseapp.com",
  projectId: "linkedin-clone-aeccb",
  storageBucket: "linkedin-clone-aeccb.appspot.com",
  messagingSenderId: "608973314663",
  appId: "1:608973314663:web:d9c757a3308262515b12c2",
  measurementId: "G-ZG0GD3HYGE",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
