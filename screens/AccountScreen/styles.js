import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },
  Intro: {
    width: '100%',
    height: '15%',
    marginBottom: 25,
  },
  title: {
    fontSize: 22,
    fontFamily: 'AzeretMono-Black',
    textAlign: 'center',
    color: colors.White,
  },
  AllSection: {
    width: '100%',
    paddingHorizontal: 16,
  },
  SectionContainer: {
    width: '100%',
    marginBottom: 12,
  },
  SectionTitle: {
    fontSize: 14,
    fontFamily: 'AzeretMono-Black',
    color: colors.Black,
    marginBottom: 10,
  },
  AccountControle: {
    marginVertical: 12,
    gap: 30,
  },
  DeleteAccount: {
    width: '100%',
    alignItems: 'center',
    paddingVertical: 5,
    paddingBottom: 40,
  },
  DeleteAccountText: {
    fontSize: 14,
    fontFamily: 'AzeretMono-Bold',
    color: colors.Error,
  },
});

export default styles;