import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  Normal: {
    position: 'absolute',
    top: 5,
    left: 5,
    height: 50,
    width: '100%',
    zIndex: -10,
    borderRadius: 5,
  },
  Small: {
    position: 'absolute',
    top: 4,
    left: 4,
    height: 40,
    width: '100%',
    zIndex: -10,
    borderRadius: 5,
  },
});

export default styles;