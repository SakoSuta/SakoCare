import React, { useContext, useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import * as Font from 'expo-font';
import AuthNavigator from './AuthNavigator';
import AppNavigator from './AppNavigator';
import AuthContext from '../services/AuthContext';

const RootNavigator = () => {
  const { user, loading: authLoading } = useContext(AuthContext);
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        'AzeretMono-Regular': require('../assets/fonts/AzeretMono-Regular.ttf'),
        'AzeretMono-Medium': require('../assets/fonts/AzeretMono-Medium.ttf'),
        'AzeretMono-Black': require('../assets/fonts/AzeretMono-Black.ttf'),
      });
      setFontsLoaded(true);
    };

    loadFonts();
  }, []);

  if (authLoading || !fontsLoaded) {
    return <LoadingScreen />;
  }

  return (
    <NavigationContainer>
      {user ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

const LoadingScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Loading...</Text>
  </View>
);

export default RootNavigator;
