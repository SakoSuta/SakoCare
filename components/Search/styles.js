import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
    container: {
      backgroundColor: colors.backgroundElement,
      borderRadius: 10,
      padding: 10,
      borderWidth: 1.5,
      width: '100%',
    },
    input: {
      paddingLeft: 20,
      fontSize: 14,
      fontFamily: "AzeretMono-Bold",
    },
  });

export default styles;