import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import MonthScreen from '../screens/MonthScreen/MonthScreen';
import AdviceScreen from '../screens/AdviceScreen/AdviceScreen';
import YearScreen from '../screens/YearScreen/YearScreen';
import AccountScreen from '../screens/AccountScreen/AccountScreen';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="My Month" component={MonthScreen} />
      <Tab.Screen name="Advice" component={AdviceScreen} />
      <Tab.Screen name="Year in pixels" component={YearScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
};

export default AppNavigator;
