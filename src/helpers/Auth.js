import firebase from '../config/firebase';
import firebaseLib from 'firebase';

const auth = firebase.auth();

export default {
  signOut() {
    auth.signOut();
  },
  authStateListener(cb) {
    auth.onAuthStateChanged(cb)
  },
  // Signs in with email & password
  signIn (email, password) {
    return new Promise((resolve, reject) => {
      auth.signInWithEmailAndPassword(email, password)
        .then(user => resolve(user))
        .catch(err => reject(err));
    }
  },
  // Returns a promise with the value of the current user admin rule (true/false)
  isAdmin() {
    return new Promise((resolve, reject) => {
      this.authStateListener(auth => {
        if (auth && auth.uid) {
          const isAdminRef = firebase.database().ref(`users/${auth.uid}/isAdmin`);
          isAdminRef.once('value')
            .then(snap => resolve(snap.val()))
            .catch(err => reject(err));
        }
        else return resolve(false);
      });
    })
  }
}
