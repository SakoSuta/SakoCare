import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import MonthScreen from '../screens/MonthScreen/MonthScreen';
import AdviceScreen from '../screens/AdviceScreen/AdviceScreen';
import YearScreen from '../screens/YearScreen/YearScreen';
import AccountScreen from '../screens/AccountScreen/AccountScreen';
import { Image } from 'react-native';

import HomeIcon from '../assets/icons/Tabs_Nav/Home/Home.png';
import HomeIconFocused from '../assets/icons/Tabs_Nav/Home/Home-focused.png';
import MonthIcon from '../assets/icons/Tabs_Nav/Month/Month.png';
import MonthIconFocused from '../assets/icons/Tabs_Nav/Month/Month-focused.png';
import AdviceIcon from '../assets/icons/Tabs_Nav/Advice/Advice.png';
import AdviceIconFocused from '../assets/icons/Tabs_Nav/Advice/Advice-focused.png';
import YearIcon from '../assets/icons/Tabs_Nav/Year/Year.png';
import YearIconFocused from '../assets/icons/Tabs_Nav/Year/Year-focused.png';
import AccountIcon from '../assets/icons/Tabs_Nav/Account/Account.png';
import AccountIconFocused from '../assets/icons/Tabs_Nav/Account/Account-focused.png';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? HomeIconFocused : HomeIcon;
          } else if (route.name === 'My Month') {
            iconName = focused ? MonthIconFocused : MonthIcon;
          } else if (route.name === 'Advice') {
            iconName = focused ? AdviceIconFocused : AdviceIcon;
          } else if (route.name === 'Year in pixels') {
            iconName = focused ? YearIconFocused : YearIcon;
          } else if (route.name === 'Account') {
            iconName = focused ? AccountIconFocused : AccountIcon;
          }

          return <Image source={iconName} style={{ width: 24, height: 24 }} />;
        },
        tabBarShowLabel: false,
        tabBarStyle: { 
          backgroundColor: '#A5B4FC',
          borderWidth: 2,
          borderTopWidth: 2.5,
          borderColor: '#1E1B4B',
          borderRadius: 20,
          marginHorizontal: 16,
          marginBottom: 25,
          position: 'absolute',
          height: 60,
          shadowColor: '#1E1B4B',
          shadowOpacity: 1,
          elevation: 3,
        },
        tabBarActiveTintColor: '#1E1B4B',
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="My Month" component={MonthScreen} />
      <Tab.Screen name="Advice" component={AdviceScreen} />
      <Tab.Screen name="Year in pixels" component={YearScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
};

export default AppNavigator;