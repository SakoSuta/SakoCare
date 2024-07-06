import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import Shadow from '../Shadow/Shadow';
import colors from '../../styles/colors';
import styles from './styles';
import useDate from '../../hooks/useDate';

const DayBox = ({ day, date, isSelected, onPress }) => {
  return (
    <View style={styles.containerDayBox}>
      <TouchableOpacity style={[styles.dayBox, isSelected && styles.selectedDayBox]} onPress={onPress}>
        <Text style={[styles.dayText, isSelected && styles.selectedDayText]}>{day}</Text>
        <Text style={[styles.dateText, isSelected && styles.selectedDateText]}>{date.split('-')[2]}</Text>
      </TouchableOpacity>
      <Shadow size="Small" color={isSelected ? colors.Black : colors.primary} />
    </View>
  );
};

const WeekCalendar = ({ onDateSelect }) => {
  const { getWeekDates } = useDate();
  const [days, setDays] = useState(getWeekDates);
  const [selectedDay, setSelectedDay] = useState('');

  useEffect(() => {
    const today = new Date();
    const dayOfWeek = today.getDay();
    const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const defaultDay = weekDays[dayOfWeek === 0 ? 6 : dayOfWeek - 1];
    setSelectedDay(defaultDay);
    const defaultDate = days.find(day => day.day === defaultDay).date;
    onDateSelect(defaultDate); // Set initial date
  }, []);

  return (
    <View style={styles.container}>
      {days.map((day) => (
        <DayBox
          key={day.day}
          day={day.day}
          date={day.date}
          isSelected={day.day === selectedDay}
          onPress={() => {
            setSelectedDay(day.day);
            onDateSelect(day.date);
          }}
        />
      ))}
    </View>
  );
};

export default WeekCalendar;
