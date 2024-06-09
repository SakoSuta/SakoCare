import React, { useContext } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import AuthContext from '../../services/AuthContext';

import Button from '../../components/Button/Button';
import Shadow from '../../components/Shadow/Shadow';

import Icon_User from '../../assets/icons/icons_user.png';

import colors from '../../styles/colors';
import styles from './styles';
import WeekCalendar from '../../components/WeekCalendar/WeekCalendar';

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
        <View style={{ height: 40 }}>
          <TouchableOpacity 
            style={styles.profileContainer} 
            onPress={() => { 
              navigation.navigate('Account');
            }}
          >
            <Image source={Icon_User} style={styles.Icon_User} />
          </TouchableOpacity>
          <Shadow size="Small" color={colors.primary} />
        </View>
      </View>
      <WeekCalendar />
      <View style={styles.Formul}>
        <Button
          title="Logout"
          onPress={handleLogout}
          color={colors.primary}
        />
      </View>
    </View>
  );
};

export default HomeScreen;