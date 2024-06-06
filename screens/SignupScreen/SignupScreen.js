import React, { useState, useContext } from 'react';
import AuthContext from '../../services/AuthContext';
import { View, Text, TouchableOpacity } from 'react-native';

import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';

import colors from '../../styles/colors';
import styles from './styles';

const SignupScreen = ({ navigation }) => {
  const [name, setName] = useState('Emilie');
  const [email, setEmail] = useState('testuser@example.com');
  const [password, setPassword] = useState('testpassword');
  const { signUp } = useContext(AuthContext);

  const handleSignup = () => {
    try {
      signUp(name, email, password);
      console.log('User signed up successfully!');
    } catch (error) {
      console.error('Signup failed!', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.WelcomeContainer}>
        <Text style={styles.title}>SIGN UP</Text>
        <Text style={styles.subtitle}>Welcome! We're excited to have you here!</Text>
      </View>
      <View style={styles.InputContainer}>
        <Input
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />
        <Input
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <Input
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
      </View>
       <View style={styles.button}>
        <Button title="Create Account" color={colors.button} onPress={handleSignup} />
      </View>
      <View style={styles.registerContainer}>
        <Text style={styles.registerText}>Already a member ?</Text>
        <TouchableOpacity>
          <Text style={styles.registerLink} onPress={() => navigation.navigate('Login')}> Log In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignupScreen;