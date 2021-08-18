import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBEuHux49GwnXqM_yUUc4xFr6ltolBUBkg",
  authDomain: "michael-kelly-20041540.firebaseapp.com",
  projectId: "michael-kelly-20041540",
  storageBucket: "michael-kelly-20041540.appspot.com",
  messagingSenderId: "922912682155",
  appId: "1:922912682155:web:b51d32f9ca855e5c6b47ee",
  measurementId: "G-WLL6T9S567"
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const storage = firebase.storage();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const messaging = firebase.messaging();