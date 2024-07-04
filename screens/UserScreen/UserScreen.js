import React, { useState, useEffect, useContext } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import AuthContext from '../../services/AuthContext';

import IntroPage from '../../components/IntroPage/IntroPage';
import BackButton from '../../components/BackButton/BackButton';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';

import styles from './styles';
import colors from '../../styles/colors';

const UserScreen = () => {
  const { logout } = useContext(AuthContext);

  const initialFormData = {
    Name: null,
    Email: null,
    Password: null,
    DateOfBirth: null,
  };
  const [formData, setFormData] = useState(initialFormData);

  // useEffect(() => {
  //   const fetchInitialData = async () => {
  //     try {
  //       const response = await api.get(`user/${userID}`);
  //       const data = response.data[0];
  //       if (data) {
  //         setFormData({
  //           Name: data.name,
  //           Email: data.email,
  //           Password: data.password,
  //           DateOfBirth: data.DateOfBirth,
  //         });
  //         console.log('Data fetched successfully:', formData);
  //       } else {
  //         setFormData(initialFormData);
  //       }
  //     } catch (error) {
  //       setFormData(initialFormData);
  //     }
  //   };

  //   fetchInitialData();
  // });

  const handleLogout = async () => {
    try {
      await logout();
      navigation.navigate('Login'); 
    } catch (error) {
      console.error('Logout failed!', error);
    }
  }

  const handleFormSubmit = async () => {
    try {
      const response = await api.patch(`user/${userID}`, {
        ...formData,
      });
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
              <Text style={styles.title}>User Info</Text>
            </View>
          </IntroPage>
        </View>
          <View style={styles.AllSection}>
            <View style={styles.SectionContainer}>
              <Text style={styles.SectionTitle}>Name :</Text>
              <Input placeholder="Name" value={formData.Name}/>
            </View>
            <View style={styles.SectionContainer}>
              <Text style={styles.SectionTitle}>Email :</Text>
              <Input placeholder="Email" value={formData.Email}/>
            </View>
            <View style={styles.SectionContainer}>
              <Text style={styles.SectionTitle}>Password :</Text>
              <Input placeholder="Password" value={formData.Password}/>
            </View>
            <View style={styles.SectionContainer}>
              <Text style={styles.SectionTitle}>Date Of Birth :</Text>
              <Input placeholder="Date Of Birth" value={formData.DateOfBirth}/>
            </View>
            <View style={styles.AccountControle}>
              <Button
                title="Save"
                onPress={handleFormSubmit}
                color={colors.primary}
              />
              <TouchableOpacity style={styles.DeleteAccount} onPress={handleLogout}>
                <Text style={styles.DeleteAccountText}>Delete Account</Text>
              </TouchableOpacity>
            </View>
          </View>
      </View>
    </ScrollView>
  );
};

export default UserScreen;