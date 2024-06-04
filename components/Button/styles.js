import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderWidth: 1.5,
    borderColor: '#000',
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 14,
    fontFamily: 'AzeretMono-Medium',
  },
  shadowView: {
    position: 'absolute',
    top: 5,
    left: 5,
    height: 50,
    width: '100%',
    zIndex: -10,
    borderRadius: 5,
    backgroundColor: '#000'}
});

export default styles;