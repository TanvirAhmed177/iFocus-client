import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyDY87LANBUK_GFDSCMDUaIwYQ-HEBfKgc4",
  authDomain: "ifocus-ca499.firebaseapp.com",
  projectId: "ifocus-ca499",
  storageBucket: "ifocus-ca499.appspot.com",
  messagingSenderId: "179079678363",
  appId: "1:179079678363:web:c5d03ce18075b37295793e",
};
const fire = firebase.initializeApp(firebaseConfig);
export default fire;
