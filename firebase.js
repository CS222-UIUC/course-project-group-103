import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB9Cg97YVl4VtDkFauT2Q8VALE-PuSpznU",
  authDomain: "cs222-app.firebaseapp.com",
  projectId: "cs222-app",
  storageBucket: "cs222-app.appspot.com",
  messagingSenderId: "366466967041",
  appId: "1:366466967041:web:0013d52a8963ef33640200",
  measurementId: "G-Q0SHJPMR36"
};


let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}
// getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

const auth = firebase.auth()

export { auth };