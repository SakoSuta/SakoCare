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
  alternateButton: {
    paddingVertical: 10,
    paddingHorizontal: 17,
    borderWidth: 1.5,
    borderColor: colors.Black,
    borderRadius: 8,
    flexDirection: 'row',
  },
  alternateButton1: {
    paddingVertical: 10,
    paddingHorizontal: 17,
    borderWidth: 1.5,
    borderColor: colors.Black,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
    flexDirection: 'row',
  },
  alternateButton2: {
    paddingVertical: 10,
    paddingHorizontal: 17,
    borderWidth: 1.5,
    borderTopWidth: 0,
    borderColor: colors.Black,
    flexDirection: 'row',
  },
  alternateButton3: {
    paddingVertical: 10,
    paddingHorizontal: 17,
    borderWidth: 1.5,
    borderTopWidth: 0,
    borderColor: colors.Black,
    borderBottomEndRadius: 8,
    borderBottomStartRadius: 8,
    flexDirection: 'row',
  },
  alternateButtonText: {
    color: colors.Black,
    fontSize: 14,
    fontFamily: 'AzeretMono-Medium',
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 17,
  }
});

export default styles;