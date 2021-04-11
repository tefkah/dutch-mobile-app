import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import { BottomNavigation, BottomNavigationTab, Icon } from '@ui-kitten/components';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import SelectPracticeScreen from '../screens/SelectPracticeScreen';
import TestScreen from '../screens/TestScreen';
import SelectLearningScreen from '../screens/SelectLearningScreen';
import { BottomTabParamList, PracticeParamList, TestParamList, LearnParamList } from '../types';
import QuizScreen from '../screens/QuizScreen';
import OptionsScreen from '../screens/OptionsScreen';

import IPAScreen from '../screens/IPAScreen';
import VowelScreen from '../screens/VowelScreen';
import ConsonantScreen from '../screens/ConsonantScreen';
import LookupScreen from '../screens/LookupScreen';

import IPAConsonantScreen from '../screens/IPAConsonantScreen';
import IPAVowelScreen from '../screens/IPAVowelScreen';
import IPAExplanationScreen from '../screens/IPAExplanationScreen';

import { ThemeContext } from '../components/theme-context';


const BellIcon = (props: any) => (
  <Icon {...props} name='trending-up-outline' />
);
const CheckIcon = (props: any) => (
  <Icon {...props} name='checkmark-square-outline' />
);
const BookIcon = (props: any) => (
  <Icon {...props} name='book-open-outline' />
);

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

const BottomTabBar = ({ navigation, state }) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={index => navigation.navigate(state.routeNames[index])}>
    <BottomNavigationTab title='PRACTICE' icon={BellIcon} />
    <BottomNavigationTab title='TEST' icon={CheckIcon} />
    <BottomNavigationTab title='LEARN' icon={BookIcon} />

  </BottomNavigation>
);

export default function BottomTabNavigator() {
  //  const colorScheme = useColorScheme();
  const themeContext = React.useContext(ThemeContext);

  return (
    <BottomTab.Navigator
      initialRouteName="Practice"
      tabBar={props => <BottomTabBar {...props} />}>
      <BottomTab.Screen
        name="Practice"
        component={PracticeNavigator}
      />
      <BottomTab.Screen
        name="Test"
        component={TestNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="checkbox-multiple-marked-outline" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Learn"
        component={LearnNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="book-open-page-variant" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <MaterialCommunityIcons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const PracticeStack = createStackNavigator();

function PracticeNavigator() {
  return (
    <PracticeStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#222222',
        },
      }}>
      <PracticeStack.Screen
        name="SelectPracticeScreen"
        component={SelectPracticeScreen}
        options={{
          headerTitle: 'Practice',
        }}
      />
      <PracticeStack.Screen
        name="OptionsScreen"
        options={{ headerTitle: 'Practice Options' }}
        component={OptionsScreen} />
      <PracticeStack.Screen
        name="Quiz"
        component={QuizScreen}
        options={{ headerTitle: 'Quiz' }}
      />
    </PracticeStack.Navigator>
  );
}

const TestStack = createStackNavigator();

function TestNavigator() {
  return (
    <TestStack.Navigator>
      <TestStack.Screen
        name="TestScreen"
        component={TestScreen}
        options={{ headerTitle: 'Test' }}
      />
      <TestStack.Screen
        name="OptionsScreen"
        component={OptionsScreen} />
      <TestStack.Screen
        name="Quiz"
        component={QuizScreen}
      />
    </TestStack.Navigator>
  );
}

const LearnStack = createStackNavigator();

function LearnNavigator() {
  return (
    <LearnStack.Navigator>
      <LearnStack.Screen
        name="SelectLearningScreen"
        component={SelectLearningScreen}
        options={{ headerTitle: 'Learn' }}
      />
      <LearnStack.Screen
        name="IPAScreen"
        component={IPAScreen}
        options={{ headerTitle: 'IPA' }}
      />
      <LearnStack.Screen
        name="VowelScreen"
        component={VowelScreen}
        options={{ headerTitle: 'Vowels' }}
      />
      <LearnStack.Screen
        name="ConsonantScreen"
        component={ConsonantScreen}
        options={{ headerTitle: 'Consonants' }}
      />
      <LearnStack.Screen
        name="LookupScreen"
        component={LookupScreen}
        options={{ headerTitle: 'Pronunciation Lookup' }}
      />
      <LearnStack.Screen
        name="IPAConsonantScreen"
        component={IPAConsonantScreen}
        options={{ headerTitle: 'IPA Consonants' }}
      />
      <LearnStack.Screen
        name="IPAVowelScreen"
        component={IPAVowelScreen}
        options={{ headerTitle: 'IPA Vowels' }}
      />
      <LearnStack.Screen
        name="IPAExplanationScreen"
        component={IPAExplanationScreen}
        options={{ headerTitle: 'IPA Explained' }}
      />
    </LearnStack.Navigator>
  );
}
