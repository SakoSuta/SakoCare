import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 40,
    backgroundColor: '#A5B4FC',
  },
  introContainer: {
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
    backgroundColor: '#E0E7FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;