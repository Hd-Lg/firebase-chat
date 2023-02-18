import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
	authDomain: 'fir-test-37172.firebaseapp.com',
	projectId: 'fir-test-37172',
	storageBucket: 'fir-test-37172.appspot.com',
	messagingSenderId: '483715052572',
	appId: '1:483715052572:web:0bf2e869e0963ad75e5bd9',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
