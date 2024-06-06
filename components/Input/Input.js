import React from 'react';
import { TextInput, View } from 'react-native';
import Shadow from '../Shadow/Shadow';
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
      <Shadow size="Normal" color='#000' />
    </View>
  );
};

export default Input;