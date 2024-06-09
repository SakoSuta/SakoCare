import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import * as NavigationBar from 'expo-navigation-bar';
import RootNavigator from './navigation/RootNavigator';
import { AuthProvider } from './services/AuthContext';
import colors from './styles/colors';

export default function App() {
  useEffect(() => {
    const setNavigationBarColor = async () => {
      await NavigationBar.setBackgroundColorAsync(colors.backgroundElement);
      await NavigationBar.setButtonStyleAsync('dark')
    };
    setNavigationBarColor();
  }, []);

  return (
    <AuthProvider>
      <RootNavigator />
      <StatusBar style="dark" backgroundColor="transparent" />
    </AuthProvider>
  );
}
