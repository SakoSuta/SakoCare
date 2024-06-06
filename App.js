import React, { useEffect } from 'react';
import { View, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import * as NavigationBar from 'expo-navigation-bar';
import RootNavigator from './navigation/RootNavigator';
import { AuthProvider } from './services/AuthContext';

export default function App() {
  useEffect(() => {
    const setNavigationBarColor = async () => {
      await NavigationBar.setBackgroundColorAsync('#A5B4FC');
      await NavigationBar.setButtonStyleAsync('dark')
    };
    setNavigationBarColor();
  }, []);

  return (
    <AuthProvider>
      <RootNavigator />
      <StatusBar style="dark" backgroundColor="#A5B4FC" />
    </AuthProvider>
  );
}
