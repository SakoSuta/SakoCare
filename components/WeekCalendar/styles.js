import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 40,
},
containerDayBox: {
    marginHorizontal: 4,
},
dayBox: {
    backgroundColor: colors.backgroundElement,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: colors.Black,
    borderRadius: 5,
    borderWidth: 1,
    width: 46,
    height: 75,
},
selectedDayBox: {
    backgroundColor: colors.primary,
    borderColor: colors.Black,
},
dayText: {
    fontSize: 12,
    fontFamily: 'AzeretMono-Medium',
    color: colors.Black,
    marginBottom: 4,
},
dateText: {
    fontSize: 16,
    fontFamily: 'AzeretMono-Medium',
    color: colors.Black,
},
selectedDayText: {
    color: colors.White,
},
selectedDateText: {
    color: colors.White,
},
});

export default styles;