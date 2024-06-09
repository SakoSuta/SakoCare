import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import Shadow from '../Shadow/Shadow';

import colors from '../../styles/colors';
import styles from './styles';

const days = [
  { day: 'Mon', date: 12 },
  { day: 'Tue', date: 13 },
  { day: 'Wed', date: 14 },
  { day: 'Thu', date: 15 },
  { day: 'Fri', date: 16 },
  { day: 'Sat', date: 18 },
  { day: 'Sun', date: 17 },
];

const DayBox = ({ day, date, isSelected, onPress }) => {
  return (
    <View style={styles.containerDayBox}>
        <TouchableOpacity style={[styles.dayBox, isSelected && styles.selectedDayBox]} onPress={onPress}>
          <Text style={[styles.dayText, isSelected && styles.selectedDayText]}>{day}</Text>
          <Text style={[styles.dateText, isSelected && styles.selectedDateText]}>{date}</Text>
        </TouchableOpacity>
        <Shadow size="Small" color={isSelected ? colors.Black : colors.primary} />
    </View>
  );
};

const WeekCalendar = () => {
  const [selectedDay, setSelectedDay] = useState('Mon');

  return (
    <View style={styles.container}>
      {days.map((day) => (
        <DayBox
          key={day.day}
          day={day.day}
          date={day.date}
          isSelected={day.day === selectedDay}
          onPress={() => setSelectedDay(day.day)}
        />
      ))}
    </View>
  );
};

export default WeekCalendar;
