import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.SignUpBackground,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    gap: 34,
  },
  WelcomeContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '70%',
    gap: 6,
  },
  title: {
    fontFamily: 'AzeretMono-Black',
    fontSize: 32,
    textAlign: 'center',
  },
  subtitle: {
    fontFamily: 'AzeretMono-Regular',
    fontSize: 16,
    textAlign: 'center',
  },
  InputContainer: {
    width: '90%',
    gap: 32,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: colors.White,
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 16,
    borderColor: colors.Black,
    borderWidth: 1,
  },
  button: {
    width: '80%',
  },
  registerContainer: {
    flexDirection: 'row',
  },
  registerText: {
    fontFamily: 'AzeretMono-Regular',
    fontSize: 14,
  },
  registerLink: {
    fontFamily: 'AzeretMono-Medium',
    fontSize: 14,
    color: '#312E81',
  },
});

export default styles;