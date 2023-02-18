// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
	authDomain: 'fir-test-37172.firebaseapp.com',
	projectId: 'fir-test-37172',
	storageBucket: 'fir-test-37172.appspot.com',
	messagingSenderId: '483715052572',
	appId: '1:483715052572:web:0bf2e869e0963ad75e5bd9',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
