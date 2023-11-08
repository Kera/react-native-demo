import {useColorScheme, Linking, Platform} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export const IsDarkMode = () => {
  return useColorScheme() === 'dark';
};
export const openAppSettings = (settingsPage: string = 'SETTINGS') => {
  if (Platform.OS === 'ios') {
    Linking.openURL('app-settings:');
  } else {
    console.log("openAppSettings");
    // Linking.openSettings();
    // Linking.sendIntent(`android.settings.${settingsPage}`);
    // IntentLauncherAndroid.ACTION_APPLICATION_DETAILS_SETTINGS
  }
};

export const backgroundStyle = {
  backgroundColor: IsDarkMode() ? Colors.darker : Colors.lighter,
  flex: 1,
};
