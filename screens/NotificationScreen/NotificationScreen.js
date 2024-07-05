import React from 'react';
import { View, Text, ScrollView, Switch } from 'react-native';

import IntroPage from '../../components/IntroPage/IntroPage';
import BackButton from '../../components/BackButton/BackButton';
import Button from '../../components/Button/Button';
import Shadow from '../../components/Shadow/Shadow';

import styles from './styles';
import colors from '../../styles/colors';

const NotificationScreen = () => {

  const handleFormSubmit = async () => {
    try {
    //   const response = await api.patch(`user/${userID}`);
      console.log('Data updated successfully:', response.data);
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };

  return (
    <ScrollView style={{backgroundColor: colors.backgroundColor}}>
      <View style={styles.container}>
        <View style={styles.Intro}>
          <IntroPage>
            <View style={styles.IntroContainer}>
              <BackButton />
              <Text style={styles.title}>Notifications</Text>
            </View>
          </IntroPage>
        </View>
          <View style={styles.AllSection}>
            <View style={styles.SectionContainer}>
              <Text style={styles.SectionTitle}>Globale notifications :</Text>
                <View style={styles.ItemsContainer}>
                  <View style={styles.Item}>
                    <Text style={styles.ItemText}>Activate/Desactivate</Text>
                    <Switch></Switch>
                  </View>
                </View>
            </View>
            <View style={styles.AccountControle}>
              <Button
                title="Save"
                onPress={handleFormSubmit}
                color={colors.primary}
              />
            </View>
          </View>
      </View>
    </ScrollView>
  );
};

export default NotificationScreen;