import React, { useContext } from 'react';
import AuthContext from '../../services/AuthContext';
import { View, Text, Button } from 'react-native';
import styles from './styles';

const HomeScreen = ({ navigation }) => {
  const { logout } = useContext(AuthContext);

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Logout failed!', error);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Accueil</Text>
      <Button
        title="Aller au profil"
        onPress={() => navigation.navigate('Profile')}
      />
      <Button
        title="Logout"
        onPress={handleLogout}
      />
    </View>
  );
};

export default HomeScreen;