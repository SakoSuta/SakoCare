import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    grid: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    header: {
        flexDirection: 'row',
        
    },
    headerText: {
        width: 21,
        textAlign: 'center',
    },
    row: {
        flexDirection: 'row',
    },
    pixel: {
        width: 17,
        height: 17,
        margin: 2,
        borderWidth: 1,
        borderColor: '#ccc',
    },
});

export default styles;