import { initializeApp, getApps, getApp } from 'firebase/app';
import { initializeAuth, getAuth, getReactNativePersistence } from 'firebase/auth';
// import { GoogleSignin } from '@react-native-google-signin/google-signin';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
    apiKey: "AIzaSyA0Li3kbyPS5g3qNXyNftIcUNt1hQnm3oY",
    authDomain: "sakocare-57a29.firebaseapp.com",
    projectId: "sakocare-57a29",
    storageBucket: "sakocare-57a29.appspot.com",
    messagingSenderId: "499404725690",
    appId: "1:499404725690:web:07bdab6daf0c3d43d69183",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
// GoogleSignin.configure({
//   webClientId: 'sakocare-57a29',
// });

export { app, auth, getApp, getAuth };
