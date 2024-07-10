import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import { Calendar } from 'react-native-calendars';

import Button from '../../components/Button/Button';
import IntroPage from '../../components/IntroPage/IntroPage';
import Shadow from '../../components/Shadow/Shadow';

import useEmotionDiary from '../../hooks/useEmotionDiary';
import useMood from '../../hooks/useMood';

import colors from '../../styles/colors';
import styles from './styles';

const MonthScreen = () => {
  const { getEntriesByMonth } = useEmotionDiary();
  const { moods } = useMood();

  const userID = 1;
  const [markedDates, setMarkedDates] = useState({});
  const [currentMonth, setCurrentMonth] = useState('');
  const [moodCount, setMoodCount] = useState({});

  const fetchData = async (year, month) => {
    const formattedMonth = `${year}-${String(month).padStart(2, '0')}`;
    const entries = await getEntriesByMonth(userID, formattedMonth);
    const dates = {};
    const count = {};
    entries.forEach(entry => {
      const date = entry.entry_date.split('T')[0];
      dates[date] = { 
        selected: true,
        selectedColor: entry.mood.color,
        customStyles: {
          text: {
            color: 'black',
          }
        }
      };
      const mood = entry.mood.name;
      if (count[mood]) {
        count[mood] += 1;
      } else {
        count[mood] = 1;
      }
    });
    setMarkedDates(dates);
    setMoodCount(count);
  };

  useEffect(() => {
    const initialYear = new Date().getFullYear();
    const initialMonth = String(new Date().getMonth() + 1).padStart(2, '0');
    fetchData(initialYear, initialMonth);
    setCurrentMonth(`${initialYear}-${initialMonth}`);
  }, []);

  const handleMonthChange = (months) => {
    if (months.length > 0) {
      const year = months[0].year;
      const month = months[0].month;
      const newMonth = `${year}-${String(month).padStart(2, '0')}`;
      if (newMonth !== currentMonth) {
        setCurrentMonth(newMonth);
        fetchData(year, month);
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.Intro}>
        <IntroPage>
          <Text style={styles.title}>Rapport</Text>
        </IntroPage>
      </View>
      <View style={styles.calendarContainer}>
        <Calendar
          markingType={'custom'}
          theme={{
            calendarBackground: colors.backgroundElement,
            todayTextColor: colors.primary,
            arrowColor: colors.primary,
            textDayFontFamily: 'AzeretMono-Regular',
            textMonthFontFamily: 'AzeretMono-Regular',
            textDayHeaderFontFamily: 'AzeretMono-Regular',
          }}
          style={styles.calendar}
          onVisibleMonthsChange={handleMonthChange}
          futureScrollRange={50}
          horizontal={true}
          markedDates={markedDates}
        />
        <Shadow color={colors.primary} size="Normal" />
      </View>
      <View style={styles.moodCountContainer}>
        <View style={styles.moodCount}>
          {moods.map((mood, index) => (
            <View key={index} style={styles.InfoMoods}>
              <View style={{ backgroundColor: mood.color, borderRadius: 99 }}>
                <Image source={mood.icon} style={styles.MoodIcon} />
              </View>
              <Text style={styles.lableCount}>{moodCount[mood.name] || 0}</Text>
            </View>
          ))}
        </View>
        <Shadow color={colors.primary} size="Normal" borderRadius={10} />
      </View>
    </View>
  );
};

export default MonthScreen;
