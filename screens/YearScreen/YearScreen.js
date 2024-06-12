import React from 'react';
import { View, Text } from 'react-native';

import YearPixel from '../../components/YearPixel/YearPixel';

import styles from './styles';

const YearScreen = () => {

  return (
    <View style={styles.container}>
        <YearPixel />
    </View>
  );
};

export default YearScreen;