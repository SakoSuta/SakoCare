import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import colors from '../../styles/colors';

const daysInMonth = (month, year) => {
  return new Date(year, month, 0).getDate();
};

const PixelGrid = ({ year, data }) => {
  const months = ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'];
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <View style={styles.container}>
      <View style={styles.MonthRow}>
        <Text style={styles.pixelText}> </Text>
        {months.map((month, index) => (
          <Text key={index} style={styles.MonthText}>{month}</Text>
        ))}
      </View>

      {days.map(day => (
        <View key={day} style={styles.row}>
          <Text style={styles.headerText}>{day}</Text>
          {months.map((_, month) => {
            const daysInCurrentMonth = daysInMonth(month + 1, year);
            if (day <= daysInCurrentMonth) {
              const dateKey = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
              const pixelColor = data[dateKey] || '#fff';
              const borderColor = colors.Black;
              return (
                <View
                  key={`${month}-${day}`}
                  style={[styles.pixel, { backgroundColor: pixelColor, borderColor: borderColor}]}
                />
              );
            }
            return <View key={`${month}-${day}`} style={styles.pixel} />;
          })}
        </View>
      ))}
    </View>
  );
};

export default PixelGrid;