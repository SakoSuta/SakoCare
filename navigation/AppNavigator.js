import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen/HomeScreen';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={HomeScreen} />
      <Tab.Screen name="zd" component={HomeScreen} />
      <Tab.Screen name="Settiqdzzdngs" component={HomeScreen} />
    </Tab.Navigator>
  );
};

export default AppNavigator;
