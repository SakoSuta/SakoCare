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
  moodCountContainer: {
    marginHorizontal: 20,
    marginBottom: 20,
  },
  moodCount: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
    padding: 20,
    paddingBottom: 13,
    borderRadius: 10,
    backgroundColor: colors.backgroundElement,
  },
  InfoMoods: {
    alignItems: 'center',
    gap: 10,
  },
  MoodIcon: {
    width: 45,
    height: 45,
    opacity: 0.4
  },
  lableCount: {
    fontSize: 16,
    fontFamily: 'AzeretMono-Bold',
    color: colors.Black,
  }
});

export default styles;