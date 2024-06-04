import { auth } from '../services/firebaseConfig';
// import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { signInWithCredential, GoogleAuthProvider, signInWithEmailAndPassword } from 'firebase/auth';
import api from '../services/api';
import axios from 'axios';

export const useAuth = () => {

  const login = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error(error);
      return error;
    }
  };

  const signUp = async (name, email, password) => {
    try {
      const response = await fetch('http://localhost:3000/auth/test', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      });
  
      if (!response.ok) {
        throw new Error(`Error with status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log('name', name);
      console.log('email', email);
      console.log('password', password);
      console.log('Date of Birth', '1990-01-01');
      console.log('result', data);
  
      return data;
    } catch (error) {
      console.error('Error during signup:', error);
      return error;
    }
  };

  const loginWithGoogle = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      const googleCredential = GoogleAuthProvider.credential(userInfo.idToken);
      await signInWithCredential(auth, googleCredential);
    } catch (error) {
      console.error(error);
      return error;
    }
  };

  const logout = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.error(error);
      return error;
    }
  };

  return { login, signUp, loginWithGoogle, logout };
};
