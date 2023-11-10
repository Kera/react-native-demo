import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Toast from 'react-native-toast-message';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import HomeScreen from './src/components/Screens/HomeScreen/HomeScreen';
import GpsScreen from './src/components/Screens/GpsScreen/GpsScreen';
import CameraScreen from './src/components/Screens/CameraScreen/CameraScreen';
import { useColorScheme } from "react-native";
import { headerStyle } from './src/components/Screens/HomeScreen/HomeScreen.style';
import { toastConfig } from './src/components/ToastMessage/ToastMessage';

function App(): JSX.Element {
  const Stack = createNativeStackNavigator();
  const isDarkMode = useColorScheme() === "dark";

  return (
    <NavigationContainer>
      <StatusBar
        barStyle={isDarkMode ? "light-content" : "dark-content"}
        backgroundColor={isDarkMode ? Colors.darker : Colors.lighter}
      />
      <Stack.Navigator initialRouteName="Home" screenOptions={headerStyle}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Gps" component={GpsScreen} />
        <Stack.Screen name="Camera" component={CameraScreen} />
      </Stack.Navigator>
      <Toast config={toastConfig()} />
    </NavigationContainer>
  );
}

export default App;
