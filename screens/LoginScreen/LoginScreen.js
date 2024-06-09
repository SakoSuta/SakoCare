import React, { useState, useContext } from 'react';
import AuthContext from '../../services/AuthContext';
import { View, Text, TouchableOpacity } from 'react-native';

import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';

import colors from '../../styles/colors';
import styles from './styles';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('testuser@example.com');
  const [password, setPassword] = useState('testpassword');
  const { login, loginWithGoogle } = useContext(AuthContext);

  const handleLogin = async () => {
    try {
      const result = await login(email, password);
      if (result) {
        console.log('Login failed!', result);
        return;
      }
      console.log('User logged in successfully!');
    } catch (error) {
      console.error('Login failed!', error);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await loginWithGoogle();
      if (result) {
        console.log('Login with Google failed!', result);
        return;
      }
      console.log('User logged in successfully with Google!');
    } catch (error) {
      console.error('Login with Google failed!', error);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.WelcomeContainer}>
        <Text style={styles.title}>SIGN IN</Text>
        <Text style={styles.subtitle}>Welcome back you've been missed</Text>
      </View>
      <View style={styles.LoginContainer}>
        <View style={styles.InputContainer}>
          <View style={styles.Input}>
            <Input
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
            />
          </View>
          <View style={styles.Input}>
            <Input
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={true}
            />
          </View>
        </View>
        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button title="Sign In" color={colors.primary} onPress={handleLogin} />
        </View>
        <View style={styles.button}>
          <Button title="Sign In Google" color={colors.primary} onPress={handleGoogleLogin} />
        </View>
      </View>
      <View style={styles.registerContainer}>
        <Text style={styles.registerText}>Not a member ?</Text>
        <TouchableOpacity>
          <Text style={styles.registerLink} onPress={() => navigation.navigate('Signup')}> Register Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
