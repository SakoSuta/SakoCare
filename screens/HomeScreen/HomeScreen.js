import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from './styles';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Accueil</Text>
      <Button
        title="Aller au profil"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
};

export default HomeScreen;