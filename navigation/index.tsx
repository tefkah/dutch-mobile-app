import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import BottomTabNavigator from './BottomTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';
import DrawerContent from '../components/DrawerContent';
import SettingsScreen from '../screens/SettingsScreen';

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation(/*{ colorScheme }: { colorScheme: ColorSchemeName }*/) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Drawer = createDrawerNavigator();


function RootNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="Root"
      drawerType={'permanent'}
      drawerStyle={{ width: '100%' }}
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Drawer.Screen name="Root" component={BottomTabNavigator} />
      <Drawer.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} options={{ title: 'Settings' }} />
    </Drawer.Navigator>
  );
}
