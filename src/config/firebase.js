import firebase from 'firebase';
import { firebaseConfig } from './env';

export default firebase.initializeApp(firebaseConfig);
