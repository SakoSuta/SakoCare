import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

const daysInMonth = (month, year) => {
  return new Date(year, month, 0).getDate();
};

const PixelGrid = ({ year, data, onPixelPress }) => {
  const months = ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'];
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <View style={styles.grid}>
      <View style={styles.header}>
        {months.map((month, index) => (
          <Text key={index} style={styles.headerText}>{month}</Text>
        ))}
      </View>
      {days.map(day => (
        <View key={day} style={styles.row}>
          {months.map((_, month) => {
            const daysInCurrentMonth = daysInMonth(month + 1, year);
            if (day <= daysInCurrentMonth) {
              const pixelColor = data[`${year}-${month + 1}-${day}`] || '#fff';
              return (
                <TouchableOpacity
                  key={`${month}-${day}`}
                  style={[styles.pixel, { backgroundColor: pixelColor }]}
                  onPress={() => onPixelPress(year, month + 1, day)}
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