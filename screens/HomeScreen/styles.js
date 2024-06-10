import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: colors.backgroundColor,
  },
  introContainer: {
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  welcomeContainer: {
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 22,
    fontFamily: 'AzeretMono-Black'
  },
  subtitle: {
    fontSize: 14,
    fontFamily: 'AzeretMono-Medium',
  },
  Icon_User: {
    width: 25,
    height: 25,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileContainer: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: colors.backgroundElement,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Formul: {
    flex: 1,
    paddingHorizontal: 16,
    justifyContent: 'space-around',
  },
});

export default styles;