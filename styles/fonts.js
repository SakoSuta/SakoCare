import * as Font from 'expo-font';

const loadFonts = async () => {
  await Font.loadAsync({
    'AzeretMono-Regular': require('../assets/fonts/AzeretMono-Regular.ttf'),
    'AzeretMono-Medium': require('../assets/fonts/AzeretMono-Medium.ttf'),
    'AzeretMono-Bold': require('../assets/fonts/AzeretMono-Bold.ttf'),
    'AzeretMono-Black': require('../assets/fonts/AzeretMono-Black.ttf'),
  });
};

export default loadFonts;
