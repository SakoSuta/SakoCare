import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
    container: {
      backgroundColor: colors.ShadowPurple,
      paddingTop: 44,
      padding: 34,
      borderBottomEndRadius: 40,
      borderBottomStartRadius: 40,
      borderWidth: 1.5,
      borderColor: colors.Black,
      width: '100%',
      height: '100%',
    },
});

export default styles;