import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB-kZ3y96z2W1IdGR8lh43fLJ--NjFKmLo",
  authDomain: "netflix-clone-36468.firebaseapp.com",
  projectId: "netflix-clone-36468",
  storageBucket: "netflix-clone-36468.appspot.com",
  messagingSenderId: "389937070176",
  appId: "1:389937070176:web:dbc507b7fd31e49a848305"

};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;