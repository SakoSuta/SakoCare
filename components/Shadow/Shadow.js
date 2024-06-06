import React from 'react';
import { View } from 'react-native';
import styles from './styles';

const Shadow = ({ size, color }) => {
  return (
    <View style={[styles[size], {backgroundColor: color}]} />
  );
};

export default Shadow;