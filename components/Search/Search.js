import React from 'react';
import { View, TextInput } from 'react-native';

import colors from '../../styles/colors';
import styles from './styles';

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search..."
        placeholderTextColor={colors.placeholder}
      />
    </View>
  );
};

export default SearchBar;
