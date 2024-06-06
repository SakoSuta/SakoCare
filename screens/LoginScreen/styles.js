import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.LoginBackground,
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
  LoginContainer: {
    width: '90%',
    gap: 18,
  },
  InputContainer: {
    width: '100%',
    gap: 32,
  },
  Input: {
    width: '100%',
  },
  forgotPassword: {
    fontSize: 14,
    color: '#312E81',
    alignSelf: 'flex-end',
    fontFamily: 'AzeretMono-Regular',
  },
  buttonContainer: {
    width: '80%',
    gap: 26,
  },
  button: {
    width: '100%',
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