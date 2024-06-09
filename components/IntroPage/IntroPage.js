import React from 'react';
import { View, TextInput } from 'react-native';

import colors from '../../styles/colors';
import styles from './styles';

const IntroPage = ({ children }) => {
    return (
        <View style={styles.container}>
            {children}
        </View>
    );
};

export default IntroPage;
