import React from 'react';
import { View } from 'react-native';
import styles from './styles';

const Shadow = ({ size, color, borderRadius }) => {
  const customStyle = {};
  if (color) {
    customStyle.backgroundColor = color;
  }
  if (borderRadius) {
    customStyle.borderRadius = borderRadius;
  }

  return (
    <View style={[styles[size], customStyle]} />
  );
};

export default Shadow;
