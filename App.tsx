//import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text, IconRegistry } from "@ui-kitten/components";
import { default as customTheme } from './assets/kitten-colors.json';
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { ThemeContext } from './components/theme-context';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';


const Drawer = createDrawerNavigator();
const screen = () => (
  <View />
);

const Nav = () => (
  <Drawer.Navigator>
    <Drawer.Screen name="screen" component={screen} />
  </Drawer.Navigator>
);

export default function App() {
  //const isLoadingComplete = useCachedResources();
  //const colorScheme = useColorScheme();

  //const [theme, setTheme] = React.useState('light');

  //const toggleTheme = () => {
  // const nextTheme = theme === 'light' ? 'dark' : 'light';
  // setTheme(nextTheme);
  // };

  //if (!isLoadingComplete) {
  //  return null;
  //} else {
  return (
    <NavigationContainer>
      <Nav />
    </NavigationContainer>
  );
}
    /*
<>
<IconRegistry icons={EvaIconsPack} />
<ThemeContext.Provider value={{ theme, toggleTheme }}>
<ApplicationProvider {...eva} theme={{ ...eva[theme], ...customTheme }}>
<SafeAreaProvider>
<Navigation />
<StatusBar />
</SafeAreaProvider>
</ApplicationProvider>
</ThemeContext.Provider>
</>
*/
//}
