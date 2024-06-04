import React, { useState } from 'react';
import { TouchableWithoutFeedback, Text, View } from 'react-native';
import styles from './styles';

const Button = ({ title, onPress, color }) => {
  const [shadowVisible, setShadowVisible] = useState(true);

  const handlePressIn = () => {
    setShadowVisible(false);
  };

  const handlePressOut = () => {
    setShadowVisible(true);
    if (onPress) {
      onPress();
    }
  };

  return (
    <View>
      <TouchableWithoutFeedback
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
      >
        <View style={[styles.button, { backgroundColor: color }]}>
          <Text style={styles.buttonText}>{title}</Text>
        </View>
      </TouchableWithoutFeedback>
      {shadowVisible && <View style={styles.shadowView} />}
    </View>
  );
};

export default Button;