import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyApglma7AzEueQnonqdB-pxRWulr-rfKwE",

  authDomain: "new-app-bafdf.firebaseapp.com",

  projectId: "new-app-bafdf",

  storageBucket: "new-app-bafdf.appspot.com",

  messagingSenderId: "569536538042",

  appId: "1:569536538042:web:ab7e32132cc50ccdf6e983",

  measurementId: "G-PQPZZ90EXZ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
