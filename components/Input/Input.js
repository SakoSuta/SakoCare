import React from 'react';
import { TextInput, View } from 'react-native';
import styles from './styles';

const Input = ({ placeholder, value, onChangeText, secureTextEntry, keyboardType }) => {
  return (
    <View style={{ width: '100%' }}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
      />
      <View style={styles.shadowView} />
    </View>
  );
};

export default Input;