import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD93EP3HBz7vvSqxlmIM8d87APizgmtqj8",
  authDomain: "fairshare-1a8d6.firebaseapp.com",
  projectId: "fairshare-1a8d6",
  storageBucket: "fairshare-1a8d6.appspot.com",
  messagingSenderId: "977552158743",
  appId: "1:977552158743:web:88fc645c6670e3a74d6c52",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export {db};
