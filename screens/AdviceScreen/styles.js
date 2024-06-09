import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  Intro: {
    width: '100%',
    height: '30%',
    marginBottom: 25,
  },
  title: {
    fontSize: 22,
    fontFamily: 'AzeretMono-Black',
    color: colors.Black,
    marginBottom: 42,
  },
  Advice: {
    paddingHorizontal: 13,
    width: '100%',
    height: '100%',
    gap: 20,
  },
});

export default styles;