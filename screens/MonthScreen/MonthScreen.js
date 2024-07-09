import React, { useContext, useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { Calendar } from 'react-native-calendars';
import AuthContext from '../../services/AuthContext';

import Button from '../../components/Button/Button';
import IntroPage from '../../components/IntroPage/IntroPage';
import Shadow from '../../components/Shadow/Shadow';

import useEmotionDiary from '../../hooks/useEmotionDiary';

import colors from '../../styles/colors';
import styles from './styles';

const MonthScreen = () => {
  const { getEntriesByMonth } = useEmotionDiary();
  const { logout } = useContext(AuthContext);

  const userID = 1;
  const [markedDates, setMarkedDates] = useState({});
  const [currentMonth, setCurrentMonth] = useState('');

  const fetchData = async (year, month) => {
    const formattedMonth = `${year}-${String(month).padStart(2, '0')}`;
    const entries = await getEntriesByMonth(userID, formattedMonth);
    const dates = {};
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
    });
    setMarkedDates(dates);
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

  const handleLogout = async () => {
    try {
      await logout();
      console.log('Logout successful!');
    } catch (error) {
      console.error('Logout failed!', error);
    }
  }

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
      <Button
        title="Logout"
        onPress={handleLogout}
        color={colors.primary}
      />
    </View>
  );
};

export default MonthScreen;
