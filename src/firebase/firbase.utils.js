import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCpWjMIAFhM8Kp27FAbYDwlQSfWYXTKpTs',
  authDomain: 'retaildb-ceab6.firebaseapp.com',
  databaseURL: 'https://retaildb-ceab6.firebaseio.com',
  projectId: 'retaildb-ceab6',
  storageBucket: 'retaildb-ceab6.appspot.com',
  messagingSenderId: '603900546177',
  appId: '1:603900546177:web:7c1d87d487b98c33a5d180',
  measurementId: 'G-K7H532XDFM',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
