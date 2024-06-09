import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.backgroundElement,
    borderRadius: 8,
    borderWidth: 1.5,
    alignItems: 'center',
    width: '100%',
    height: 90,
  },
  imageContainer: {
    flex: 1,
    alignItems: 'left',
    marginRight: 10,

  },
  image: {
    width: '110%',
    height: '100%',
    borderRadius: 7,
  },
  textContainer: {
    flex: 2,
    marginLeft: 15,
  },
  title: {
    fontSize: 16,
    fontFamily: "AzeretMono-Bold",
  },
  description: {
    fontSize: 12,
    marginTop: 4,
    fontFamily: "AzeretMono-Regular",
  },
});

export default styles;