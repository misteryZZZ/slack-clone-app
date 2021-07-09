import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDiiA47NgkTwYv-V13SisqReiaTPeMgooI",
  authDomain: "slack-clone-app-5390b.firebaseapp.com",
  projectId: "slack-clone-app-5390b",
  storageBucket: "slack-clone-app-5390b.appspot.com",
  messagingSenderId: "770799881379",
  appId: "1:770799881379:web:7bd1f2817c58e3098b4316",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
