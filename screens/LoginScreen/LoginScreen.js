import React, { useState, useContext } from 'react';
import AuthContext from '../../services/AuthContext';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
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
      // navigation.navigate('Home', { screen: 'Home' });
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
      // navigation.navigate('Home', { screen: 'Home' });
    } catch (error) {
      console.error('Login with Google failed!', error);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>SIGN IN</Text>
      <Text style={styles.subtitle}>Welcome back you've been missed</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#C4C4C4"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#C4C4C4"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
       <View style={styles.buttonContainer}>
        <Button title="Sign In" color="#5C6BC0" onPress={handleLogin} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Sign In Google" color="#5C6BC0" onPress={handleGoogleLogin} />
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
