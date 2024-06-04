import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#E0E7FF',
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
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
  },
  profileContainer: {
    width: 45,
    height: 45,
    borderRadius: 8,
    backgroundColor: '#F1F5F9',
    boxShadow: '2px 3px 0px 0px #6366F1',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;