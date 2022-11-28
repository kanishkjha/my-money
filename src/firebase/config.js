import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCI02ZGa8ZkoOyXvPq5ZJjqqPz_krqpfjc",
  authDomain: "mymoney-6e7b5.firebaseapp.com",
  projectId: "mymoney-6e7b5",
  storageBucket: "mymoney-6e7b5.appspot.com",
  messagingSenderId: "661451975607",
  appId: "1:661451975607:web:4ab79a3da95a0855e45632",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init service
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp };
