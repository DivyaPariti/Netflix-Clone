import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCDJhkHJFqDWHJiioPFFlKFPKw-ii8oPT8",
    authDomain: "netflix-advanced-clone.firebaseapp.com",
    projectId: "netflix-advanced-clone",
    storageBucket: "netflix-advanced-clone.appspot.com",
    messagingSenderId: "433533236677",
    appId: "1:433533236677:web:47d409c1e5025c451087ac",
    measurementId: "G-LZPBWZY31E"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
