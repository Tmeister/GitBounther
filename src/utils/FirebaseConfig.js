import firebase from 'firebase/app';
import 'firebase/auth';

const config = {
  apiKey: process.env.VUE_APP_FIREBASE_apiKey,
  authDomain: process.env.VUE_APP_FIREBASE_authDomain,
  databaseURL: process.env.VUE_APP_FIREBASE_databaseURL,
  projectId: process.env.VUE_APP_FIREBASE_projectId,
  storageBucket: process.env.VUE_APP_FIREBASE_storageBucket,
  messagingSenderI: process.env.VUE_APP_FIREBASE_messagingSenderId,
};

firebase.initializeApp(config);

export default firebase;
