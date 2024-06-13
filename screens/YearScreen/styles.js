import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingBottom: 110,
    paddingHorizontal: 16,
    backgroundColor: colors.backgroundColor,
  },
  YearContainer: {
    alignItems: 'center',
    backgroundColor: colors.backgroundElement,
    paddingVertical: 10,
    paddingHorizontal: 10,
    width: '100%',
    borderRadius: 24,
  },
  title: {
    fontSize: 24,
    fontFamily: 'AzeretMono-Bold',
    marginBottom: 16,
  },
  Moods: {
    alignItems: 'center',
    marginVertical: 15,
    marginBottom: 20,
  },
  MoodsContainer: {
    backgroundColor: colors.backgroundElement,
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
    width: '100%',
    borderRadius: 24,
  },
  AllMoods: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  InfoColors: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
    marginVertical: 12,
    width: 95,
  },
  grid: {
    backgroundColor: "red",
    borderRadius: 5,
    borderWidth: 1,
    width: 20,
    height: 20,
    marginRight: 5,
  },
  TextMood: {
    fontSize: 14,
    fontFamily: 'AzeretMono-Bold',
    marginTop: 4,
  },
});

export default styles;