import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },
  Intro: {
    width: '100%',
    marginBottom: 25,
  },
  title: {
    textAlign: 'center',
    fontSize: 22,
    fontFamily: 'AzeretMono-Black',
    color: colors.Black,
  },
  calendarContainer: {
    marginHorizontal: 20,
    marginBottom: 20,
    borderRadius: 10,
  },
  calendar: {
    padding: 10,
    borderRadius: 5,
  },
});

export default styles;