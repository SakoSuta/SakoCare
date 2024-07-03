import React from 'react';
import { View, Text, Image } from 'react-native';

import Shadow from '../Shadow/Shadow';

import styles from './styles';

const Advice = ({ title, description, image }) => {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={image}
            style={styles.image}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      </View>
      <Shadow size="Normal" />
    </View>
  );
};

export default Advice;