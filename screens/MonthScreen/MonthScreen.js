import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import AuthContext from '../../services/AuthContext';

import Button from '../../components/Button/Button';

import colors from '../../styles/colors';
import styles from './styles';

const MonthScreen = () => {
  const { logout } = useContext(AuthContext);

  const handleLogout = async () => {
    try {
      await logout();
      console.log('Logout successful!');
    } catch (error) {
      console.error('Logout failed!', error);
    }
  }

  return (
    <View style={styles.container}>
        <Text>Account Screen</Text>
      <Button
        title="Logout"
        onPress={handleLogout}
        color={colors.primary}
      />
    </View>
  );
};

export default MonthScreen;