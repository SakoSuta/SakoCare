import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerText: {
        width: 21,
        fontSize: 12,
        fontFamily: 'AzeretMono-Regular',
        textAlign: 'center',
        paddingRight: 5,
        paddingBottom: 3,
    },
    MonthRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginRight: 10,
        marginLeft: 5,
    },
    MonthText: {
        fontSize: 12,
        fontFamily: 'AzeretMono-Regular',
        textAlign: 'center',
    },
    emptyHeader: {
        width: 21,
    },
    pixel: {
        width: 16,
        height: 16,
        borderWidth: 1,
        borderColor: colors.Black,
        borderRadius: 3,
        marginHorizontal: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    pixelText: {
        color: 'transparent',
    },
});

export default styles;
