import React, { useContext } from 'react';
import AuthContext from '../../services/AuthContext';
import { View, Text, Image } from 'react-native';
import Button from '../../components/Button/Button';
import Icon_User from '../../assets/icons/icons_user.png';
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
      <View style={styles.introContainer}>
        <View style={styles.welcomeContainer}>
          <Text style={styles.title}>Hello SakoSuta!</Text>
          <Text style={styles.subtitle}>How was your day ?</Text>
        </View>
        <View style={styles.profileContainer} onPress={() => { navigation.navigate('Profile'); console.log('hello'); }}>
          <Image source={Icon_User}/>
        </View>
      </View>
      <Button
        title="Aller au profil"
        color="#5C6BC0"
      />
      <Button
        title="Logout"
        onPress={handleLogout}
        color="#5C6BC0"
      />
    </View>
  );
};

export default HomeScreen;