import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 50,
    backgroundColor: colors.White,
    borderRadius: 8,
    paddingHorizontal: 24,
    paddingVertical: 12,
    fontSize: 16,
    borderColor: colors.Black,
    borderWidth: 1,
    fontFamily: 'AzeretMono-Medium',
  },
});

export default styles;