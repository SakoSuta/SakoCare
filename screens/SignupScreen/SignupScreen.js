import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import styles from './styles';

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    console.log('Signup button pressed!')
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inscription</Text>
      <Input
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <Input
        placeholder="Mot de passe"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="S'inscrire" onPress={handleSignup} />
      <Text style={styles.link} onPress={() => navigation.navigate('Login')}>
        Déjà un compte ? Connectez-vous
      </Text>
    </View>
  );
};

export default SignupScreen;