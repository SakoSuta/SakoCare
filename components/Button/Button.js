import React, { useState } from 'react';
import { TouchableWithoutFeedback, Text, View, Image } from 'react-native';

import Shadow from '../Shadow/Shadow';

import styles from './styles';

const Button = ({ title, onPress, color, variant = 'default', icon }) => {
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

  const getButtonStyle = () => {
    switch (variant) {
      case 'alternate':
        return [styles.alternateButton, { backgroundColor: color }];
      case 'alternate-1':
        return [styles.alternateButton1, { backgroundColor: color }];
      case 'alternate-2':
        return [styles.alternateButton2, { backgroundColor: color }];
      case 'alternate-3':
        return [styles.alternateButton3, { backgroundColor: color }];
      default:
        return [styles.button, { backgroundColor: color }];
    }
  };

  const getTextStyle = () => {
    switch (variant) {
          case 'alternate':
          case 'alternate-1':
          case 'alternate-2':
          case 'alternate-3':
            return styles.alternateButtonText;
          default:
            return styles.buttonText;
       }
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPressIn={handlePressIn} onPressOut={handlePressOut}>
        <View style={getButtonStyle()}>
          {icon && <Image source={icon} style={styles.icon} />} 
          <Text style={getTextStyle()}>{title}</Text>
        </View>
      </TouchableWithoutFeedback>
      {shadowVisible && variant !== 'alternate' && <Shadow size="Normal" />}
    </View>
  );
};

export default Button;
