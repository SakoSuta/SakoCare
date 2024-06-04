import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 24,
    paddingVertical: 12,
    fontSize: 16,
    borderColor: '#000',
    borderWidth: 1,
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