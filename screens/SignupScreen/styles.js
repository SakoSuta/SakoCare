import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#80E8A0',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#000',
    marginBottom: 30,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    fontSize: 16,
    borderColor: '#000',
    borderWidth: 1,
  },
  forgotPassword: {
    fontSize: 14,
    color: '#C4C4C4',
    alignSelf: 'flex-end',
    marginBottom: 30,
  },
  buttonContainer: {
    width: '100%',
    marginBottom: 15,
  },
  registerContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  registerText: {
    fontSize: 14,
    color: '#000',
  },
  registerLink: {
    fontSize: 14,
    color: '#5C6BC0',
    fontWeight: 'bold',
  },
});

export default styles;