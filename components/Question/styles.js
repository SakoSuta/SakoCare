import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: colors.backgroundColor,
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
  EnergyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 24,
    backgroundColor: colors.backgroundElement,
    paddingVertical: 20,
    paddingHorizontal: 10,
    width: '100%',
  },
  EnergylevelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
  },
  EnergyLabel: {
    fontSize: 12,
    fontFamily: 'AzeretMono-Medium',
    textAlign: 'center',
    marginBottom: 10,
    width: 50,
  }
});

export default styles;