import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import IntroPage from '../../components/IntroPage/IntroPage';
import BackButton from '../../components/BackButton/BackButton';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';

import styles from './styles';
import colors from '../../styles/colors';

const FavoriteScreen = () => {

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
              <Text style={styles.title}>Favorites Days</Text>
            </View>
          </IntroPage>
        </View>
          <View style={styles.AllSection}>
            <View style={styles.SectionContainer}>
              <Text style={styles.SectionTitle}>Name :</Text>
              <Input placeholder="Name" value="{formData.Name}"/>
            </View>
          </View>
      </View>
    </ScrollView>
  );
};

export default FavoriteScreen;