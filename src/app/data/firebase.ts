import { initializeApp } from 'firebase/app';
import {getFirestore} from 'firebase/firestore'
import {GoogleAuthProvider, getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyBN7yjMXLcIK2XTCWdZrarGuxY8ul3-cTo',
  authDomain: 'discord-app-5110f.firebaseapp.com',
  projectId: 'discord-app-5110f',
  storageBucket: 'discord-app-5110f.appspot.com',
  messagingSenderId: '201454550614',
  appId: '1:201454550614:web:8fd2ab8dafcfad5962c5f7',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, db };
