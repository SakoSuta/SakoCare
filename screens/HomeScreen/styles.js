import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: colors.backgroundColor,
    paddingBottom: 30,
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
    paddingHorizontal: 16,
    justifyContent: 'space-around',
    marginBottom: 70,
  },
  QuestionContainer: {
    marginVertical: 10,
  },
  submitButton: {
    width: '100%',
    height: 60,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitButtonText: {
    color: colors.White,
    fontSize: 18,
    fontFamily: 'AzeretMono-Medium',
  },
  fixedButton: {
    position: 'absolute',
    bottom: 100,
    right: 20,
    backgroundColor: colors.primary,
    borderRadius: 50,
    padding: 15,
  },
  fixedButtonDisabled: {
    backgroundColor: "darkgrey",
  },
  fixedButtonText: {
    color: colors.White,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  fixedButtonDisabledText: {
    color: "gray",
  },
  DeleteDay: {
    width: '100%',
    alignItems: 'center',
    paddingTop: 25,
    paddingBottom: 10,
  },
  DeleteDayText: {
    fontSize: 14,
    fontFamily: 'AzeretMono-Bold',
    color: colors.Error,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontFamily: 'AzeretMono-Bold',
    marginBottom: 10,
  },
  modalText: {
    fontSize: 14,
    fontFamily: 'AzeretMono-Regular',
    textAlign: 'center',
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 5,
  },
  closeButtonText: {
    color: colors.White,
    fontFamily: 'AzeretMono-Bold',
  },
});

export default styles;