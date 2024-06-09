import React from 'react';
import { View, Text, Image } from 'react-native';

import Shadow from '../Shadow/Shadow';

import colors from '../../styles/colors';
import styles from './styles';

import Exemple from '../../assets/images/Exemple.png';

const Advice = ({ title, description}) => {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={Exemple}
            style={styles.image}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      </View>
      <Shadow size="Normal" color={colors.Black} />
    </View>
  );
};

export default Advice;