import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Intro: {
    width: '100%',
    marginBottom: 25,
  },
  IntroContainer: {
    width: '100%',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 22,
    fontFamily: 'AzeretMono-Black',
    textAlign: 'center',
    color: colors.White,
    marginTop: 10,
  },
  AllSection: {
    width: '100%',
    paddingHorizontal: 16,
    alignItems: 'center',
    gap: 20,
  },
  SectionContainer: {
    width: '100%',
    marginBottom: 12,
  },
  SectionTitle: {
    fontSize: 14,
    fontFamily: 'AzeretMono-Black',
    color: colors.Black,
    marginBottom: 15,
  },
  ItemsContainer: {
    width: '100%',
    alignItems: 'center',
  },
  Item: {
    width: '100%',
    height: 60,
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: colors.backgroundElement,
    borderRadius: 10,
    paddingHorizontal: 25,
  },
  ItemText: {
    fontSize: 14,
    fontFamily: 'AzeretMono-Black',
    color: colors.Black,
    textAlignVertical: 'center',
  },
  AccountControle: {
    width: '70%',
    marginTop: 12,
    paddingBottom: 10,
  },
});

export default styles;