import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },
  TypeTitle: {
    fontSize: 14,
    fontFamily: 'AzeretMono-Bold',
    marginBottom: 12,
  },
  MoodsContainer: {
    borderRadius: 24,
    backgroundColor: colors.backgroundElement,
    paddingVertical: 20,
    paddingHorizontal: 10,
    width: '100%',
  },
  AllMoods: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  MoodsIcone: {
    width: 55,
    height: 55,
  },
  LevelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 24,
    backgroundColor: colors.backgroundElement,
    paddingVertical: 20,
    paddingHorizontal: 10,
    width: '100%',
  },
  LevelSelectorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  LevelLabel: {
    fontSize: 12,
    fontFamily: 'AzeretMono-Medium',
    textAlign: 'center',
    marginBottom: 10,
    width: 65,
  },
  ActivityContainer: {
    borderRadius: 24,
    backgroundColor: colors.backgroundElement,
    paddingVertical: 15,
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ActivityIconeContainer: {
    alignItems: 'center',
    paddingHorizontal: 5,
    paddingVertical: 5,
    marginHorizontal: 5,
    borderColor: colors.primary,
    borderWidth: 1.5,
    borderRadius: 90,
  },
  ActivityIcone: {
    width: 40,
    height: 40,
  },
  ActivityLabel: {
    fontSize: 12,
    fontFamily: 'AzeretMono-Medium',
    textAlign: 'center',
    width: 100,
  },
  activity: {
    alignItems: 'center',
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: 'center',
    margin: 10,
  },
  SleepContainer: {
    borderRadius: 24,
    backgroundColor: colors.backgroundElement,
    paddingVertical: 20,
    paddingHorizontal: 10,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    fontSize: 45,
    fontFamily: 'AzeretMono-Bold',
    textAlign: 'center',
    width: 80,
  },
  label: {
    fontSize: 25,
    fontFamily: 'AzeretMono-Bold',
    marginHorizontal: 10,
  },
});

export default styles;