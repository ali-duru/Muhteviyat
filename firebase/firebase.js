import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
	apiKey: 'AIzaSyBJOeZXytkOesVvXM_YVYoTnKC4Aplvlug',
	authDomain: 'muht-a99e6.firebaseapp.com',
	projectId: 'muht-a99e6',
	storageBucket: 'muht-a99e6.appspot.com',
	messagingSenderId: '255922727858',
	appId: '1:255922727858:web:7061209294b4b5214f52ab',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
