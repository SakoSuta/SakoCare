import { auth } from '../services/firebaseConfig';
// import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { signInWithCredential, GoogleAuthProvider, signInWithEmailAndPassword } from 'firebase/auth';
import api from '../services/api';

export const useAuth = () => {

  const login = async (email, password) => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      console.log(result)
    } catch (error) {
      console.error(error);
      return error;
    }
  };

const signUp = async (name, email, password) => {
  try {
    console.log(api)
    const response = await api.post('/auth/signup', {
      name,
      email,
      password,
      dateOfBirth: '1990-01-01'
    });
    return response.data;
  } catch (error) {
    console.error('Error during signup:', error.response ? error.response.data : error.message);
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
