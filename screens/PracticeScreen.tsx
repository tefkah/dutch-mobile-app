import * as React from 'react';
import {StyleSheet} from 'react-native';
import {Button, Text, Layout, Divider} from '@ui-kitten/components';
//import EditScreenInfo from '../components/EditScreenInfo';
import { View } from '../components/Themed';
import {createStackNavigator} from "@react-navigation/stack";
import OptionsScreen from "./OptionsScreen";
import SelectPracticeScreen from "./SelectPracticeScreen";

export default function PracticeScreen() {

    const Stack = createStackNavigator();
  return (
      <Stack.Navigator
          initialRouteName= "SelectPracticeScreen">
          <Stack.Screen
            name="SelectPracticeScreen"
            component={SelectPracticeScreen}
          />
          <Stack.Screen
              name="OptionsScreen"
              component = {OptionsScreen}/>
    </Stack.Navigator>
  );
}

//Tester

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
