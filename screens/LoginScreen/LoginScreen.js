import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import styles from './styles';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Login button pressed!')
    console.log('Email:', email);
    console.log('Password', password);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Connexion</Text>
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
      <Button title="Se connecter" onPress={handleLogin} />
      <Text style={styles.link} onPress={() => navigation.navigate('Signup')}>
        Pas encore de compte ? Inscrivez-vous
      </Text>
    </View>
  );
};

export default LoginScreen;