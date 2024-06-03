import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import styles from './styles';

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSignup = () => {
    console.log('Signup button pressed!')
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>SIGN UP</Text>
      <Text style={styles.subtitle}>Welcome! We're excited to have you here!</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        placeholderTextColor="#C4C4C4"
        value={name}
        onChangeText={setName}
      />
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
        <Button title="Create Account" color="#5C6BC0" onPress={handleSignup} />
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