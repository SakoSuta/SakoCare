import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import api from '../../services/api';
import Shadow from '../../components/Shadow/Shadow';
import Icon_User from '../../assets/icons/icons_user.png';
import colors from '../../styles/colors';
import styles from './styles';
import WeekCalendar from '../../components/WeekCalendar/WeekCalendar';
import Question from '../../components/Question/Question';

const userID = 1;

const HomeScreen = ({ navigation }) => {
  const initialFormData = {
    mood_id: null,
    energy_level: null,
    stress_level: null,
    social_level: null,
    activity_id: [],
    sleep_hours: null,
    exercise_time: null,
    description: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [isFormChanged, setIsFormChanged] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [entryId, setEntryId] = useState(null);

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const response = await api.get(`user/emotion-diary/${userID}/by-date`, { params: { date: selectedDate } });
        const data = response.data[0];
        if (data) {
          setFormData({
            mood_id: data.mood.id,
            energy_level: data.energy_level,
            stress_level: data.stress_level,
            social_level: data.social_level,
            activity_id: data.activities,
            sleep_hours: data.sleep_hours !== null ? parseFloat(data.sleep_hours) : null,
            exercise_time: data.exercise_time !== null ? parseFloat(data.exercise_time) : null,
            description: data.description,
          });
          setEntryId(data.id);
          console.log('Data fetched successfully:', formData);
        } else {
          setFormData(initialFormData);
          setEntryId(null);
        }
      } catch (error) {
        setFormData(initialFormData);
        setEntryId(null);
      }
    };

    fetchInitialData();
  }, [selectedDate]);

  useEffect(() => {
    const isChanged = JSON.stringify(formData) !== JSON.stringify(initialFormData);
    setIsFormChanged(isChanged); // TODO: HAVE TO FIX
  }, [formData]);

  const handleFormSubmit = async () => {
    try {
      if (entryId) {
        const response = await api.patch(`/emotion-diary/${entryId}`, {
          user_id: userID,
          entry_date: selectedDate,
          ...formData,
        });
        console.log('Data updated successfully:', response.data);
      } else {
        const response = await api.post('/emotion-diary', {
          user_id: userID,
          entry_date: selectedDate,
          ...formData,
        });
        console.log('Data submitted successfully:', response.data);
        setEntryId(response.data.id);
        setIsFormChanged(false);
      }
      setIsFormChanged(false);
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };

  const handleDeleteDay = async () => {
    try {
      if (entryId) {
        const response = await api.delete(`/emotion-diary/${entryId}`);
        console.log('Data deleted successfully:', response.data);
        setFormData(initialFormData);
        setEntryId(null);
      }
    }
    catch (error) {
      console.error('Error deleting data:', error);
    }
  }

  return (
    <View>
      <ScrollView>
        <View style={styles.container}>
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
          <WeekCalendar onDateSelect={setSelectedDate} />
          <View style={styles.Formul}>
            <View style={styles.QuestionContainer}>
              <Question type="moods" value={formData.mood_id} onSelect={(mood) => setFormData({ ...formData, mood_id: mood })} />
            </View>
            <View style={styles.QuestionContainer}>
              <Question type="energy" value={formData.energy_level} onSelect={(level) => setFormData({ ...formData, energy_level: level })} />
            </View>
            <View style={styles.QuestionContainer}>
              <Question type="stress" value={formData.stress_level} onSelect={(level) => setFormData({ ...formData, stress_level: level })} />
            </View>
            <View style={styles.QuestionContainer}>
              <Question type="social" value={formData.social_level} onSelect={(level) => setFormData({ ...formData, social_level: level })} />
            </View>
            <View style={styles.QuestionContainer}>
              <Question type="activity" value={formData.activity_id} onSelect={(activities) => setFormData({ ...formData, activity_id: activities })} />
            </View>
            <View style={styles.QuestionContainer}>
              <Question type="sleep" value={formData.sleep_hours} onSelect={(hours) => setFormData({ ...formData, sleep_hours: hours })} />
            </View>
            <View style={styles.QuestionContainer}>
              <Question type="exercice" value={formData.exercise_time} onSelect={(time) => setFormData({ ...formData, exercise_time: time })} />
            </View>
            <View style={styles.QuestionContainer}>
              <Question type="description" value={formData.description} onChange={(desc) => setFormData({ ...formData, description: desc })} />
            </View>
            <TouchableOpacity style={styles.DeleteDay} onPress={handleDeleteDay}>
              <Text style={styles.DeleteDayText}>Delete this day</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity
              style={[styles.fixedButton, !isFormChanged && styles.fixedButtonDisabled]}
              onPress={handleFormSubmit}
              disabled={!isFormChanged}>
        <Text style={[styles.fixedButtonText, !isFormChanged && styles.fixedButtonDisabledText]}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
