import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import colors from '../styles/colors';

import HomeScreen from '../screens/HomeScreen/HomeScreen';
import MonthScreen from '../screens/MonthScreen/MonthScreen';
import AdviceScreen from '../screens/AdviceScreen/AdviceScreen';
import YearScreen from '../screens/YearScreen/YearScreen';
import AccountScreen from '../screens/AccountScreen/AccountScreen';
import UserScreen from '../screens/UserScreen/UserScreen.js';

import HomeIcon from '../assets/icons/Tabs_Nav/Home/Home.png';
import HomeIconFocused from '../assets/icons/Tabs_Nav/Home/Home-focused.png';
import MonthIcon from '../assets/icons/Tabs_Nav/Month/Month.png';
import MonthIconFocused from '../assets/icons/Tabs_Nav/Month/Month-focused.png';
import AdviceIcon from '../assets/icons/Tabs_Nav/Advice/Advice.png';
import AdviceIconFocused from '../assets/icons/Tabs_Nav/Advice/Advice-focused.png';
import YearIcon from '../assets/icons/Tabs_Nav/Year/Year.png';
import YearIconFocused from '../assets/icons/Tabs_Nav/Year/Year-focused.png';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      style={{ paddingBottom: 110 }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? HomeIconFocused : HomeIcon;
          } else if (route.name === 'Month') {
            iconName = focused ? MonthIconFocused : MonthIcon;
          } else if (route.name === 'Advice') {
            iconName = focused ? AdviceIconFocused : AdviceIcon;
          } else if (route.name === 'Year') {
            iconName = focused ? YearIconFocused : YearIcon;
          }

          return <Image source={iconName} style={{ width: 24, height: 24 }} />;
        },
        tabBarShowLabel: false,
        tabBarStyle: { 
          backgroundColor: colors.backgroundElement,
          borderWidth: 2,
          borderTopWidth: 2.5,
          borderColor: colors.second,
          borderRadius: 20,
          marginHorizontal: 16,
          marginBottom: 25,
          position: 'absolute',
          height: 60,
          shadowColor: colors.second,
          shadowOpacity: 1,
          elevation: 3,
        },
        tabBarActiveTintColor: colors.second,
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Month" component={MonthScreen} />
      <Tab.Screen name="Advice" component={AdviceScreen} />
      <Tab.Screen name="Year" component={YearScreen} />
    </Tab.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Tabs" component={TabNavigator} />
      <Stack.Screen name="Account" component={AccountScreen} />
      <Stack.Screen name="User" component={UserScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
