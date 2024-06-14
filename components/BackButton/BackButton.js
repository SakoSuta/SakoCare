import React from 'react';
import { View, TouchableWithoutFeedback, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Shadow from '../Shadow/Shadow';

import colors from '../../styles/colors';
import styles from './styles';

import BackIcon from '../../assets/icons/back.png';

const BackButton = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
        <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
            <View style={styles.BackContainer}>
                <Image source={BackIcon} style={styles.icon} />
            </View>
        </TouchableWithoutFeedback>
        <Shadow size="Small" color={colors.Black} />
    </View>
  );
};

export default BackButton;