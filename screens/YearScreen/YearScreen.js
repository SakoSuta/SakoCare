import React from 'react';
import { ScrollView, Text, View, Image } from 'react-native';

import YearPixel from '../../components/YearPixel/YearPixel';
import Shadow from '../../components/Shadow/Shadow';

import styles from './styles';
import colors from '../../styles/colors';

const moods = [
  { id: 1, name: 'Very Sad', color: "red"},
  { id: 2, name: 'Sad', color: "orange"},
  { id: 3, name: 'Neutral', color: "yellow"},
  { id: 4, name: 'Happy', color: "limegreen"},
  { id: 5, name: 'Very Happy', color: "green"},
];

const generateFakeData = (year) => {
  const moods = ['red', 'orange', 'yellow', 'limegreen', 'green'];
  const data = {};

  const daysInMonth = (month, year) => {
    return new Date(year, month, 0).getDate();
  };

  for (let month = 1; month <= 12; month++) {
    const days = daysInMonth(month, year);
    for (let day = 1; day <= days; day++) {
      const dateKey = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      const mood = moods[Math.floor(Math.random() * moods.length)];
      data[dateKey] = mood;
    }
  }

  return data;
};

const YearScreen = () => {
  const data = generateFakeData(2023);
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>My Year in pixel</Text>
        <View style={styles.Moods}>
            <View style={styles.MoodsContainer}>
              <View style={styles.AllMoods}>
                {moods.map((mood, index) => (
                    <View key={index} style={styles.InfoColors}>
                        <View style={[styles.grid, { backgroundColor: mood.color }]}></View>
                        <Text style={styles.TextMood}>{mood.name}</Text>
                    </View>
                ))}
              </View>
            </View>
            <Shadow size="Normal" color={colors.Black} borderRadius={24}/>
        </View>

        <View>
          <View style={styles.YearContainer}>
            <YearPixel year={2023} data={data}/>
          </View>
          <Shadow size="Normal" color={colors.Black} borderRadius={24}/>
        </View>
      </View>
    </ScrollView>
  );
};

export default YearScreen;