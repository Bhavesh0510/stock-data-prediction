import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBJnTSIdsqj1UnueP_XmTfUKIRayqu6no8",
  authDomain: "theminestocks.firebaseapp.com",
  projectId: "theminestocks",
  storageBucket: "theminestocks.appspot.com",
  messagingSenderId: "249089323615",
  appId: "1:249089323615:web:682e50c6369d0a2eaa61ea",
  measurementId: "G-67VJYQKE6Z"
};


 
export const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth(firebaseApp)
export const db = getFirestore()