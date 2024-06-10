import React, { useContext } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import AuthContext from '../../services/AuthContext';

import Button from '../../components/Button/Button';
import Shadow from '../../components/Shadow/Shadow';

import Icon_User from '../../assets/icons/icons_user.png';

import colors from '../../styles/colors';
import styles from './styles';
import WeekCalendar from '../../components/WeekCalendar/WeekCalendar';
import Question from '../../components/Question/Question';

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
    <ScrollView style={styles.container}>
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
        <View style={styles.QuestionContainer}>
          <Question type="moods"/>
        </View>
        <View style={styles.QuestionContainer}>
          <Question type="energy" />
        </View>
        <View style={styles.QuestionContainer}>
          <Question type="stress" />
        </View>
        <View style={styles.QuestionContainer}>
          <Question type="social" />
        </View>
        <View style={styles.QuestionContainer}>
          <Question type="activity" />
        </View>
        <View style={styles.QuestionContainer}>
          <Question type="sleep" />
        </View>
        <View style={styles.QuestionContainer}>
          <Question type="exercice" />
        </View>
        <Button
          title="Logout"
          onPress={handleLogout}
          color={colors.primary}
        />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;