import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  button: {
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderWidth: 1.5,
    borderColor: colors.Black,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: colors.White,
    fontSize: 14,
    fontFamily: 'AzeretMono-Medium',
  },
});

export default styles;