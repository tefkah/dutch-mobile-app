import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import {BottomNavigation, BottomNavigationTab, Icon} from '@ui-kitten/components';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import PracticeScreen from '../screens/PracticeScreen';
import TestScreen from '../screens/TestScreen';
import LearnScreen from '../screens/LearnScreen';
import { BottomTabParamList, PracticeParamList, TestParamList, LearnParamList } from '../types';

const BellIcon = (props: any) => (
    <Icon {... props} name='trending-up-outline'/>
);
const CheckIcon = (props: any) => (
    <Icon {... props} name='checkmark-square-outline'/>
);
const BookIcon = (props: any) => (
    <Icon {... props} name='book-open-outline'/>
);

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

const BottomTabBar = ({navigation, state}) => (
    <BottomNavigation
        selectedIndex={state.index}
        onSelect={index => navigation.navigate(state.routeNames[index])}>
        <BottomNavigationTab title='PRACTICE' icon={BellIcon}/>
        <BottomNavigationTab title='TEST' icon={CheckIcon}/>
        <BottomNavigationTab title='LEARN' icon={BookIcon}/>

    </BottomNavigation>
);

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Practice"
      tabBar={ props => <BottomTabBar {... props}/>}>
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
const PracticeStack = createStackNavigator<PracticeParamList>();

function PracticeNavigator() {
  return (
    <PracticeStack.Navigator>
      <PracticeStack.Screen
        name="PracticeScreen"
        component={PracticeScreen}
        options={{ headerTitle: 'Practice' }}
      />
    </PracticeStack.Navigator>
  );
}

const TestStack = createStackNavigator<TestParamList>();

function TestNavigator() {
  return (
    <TestStack.Navigator>
      <TestStack.Screen
        name="TestScreen"
        component={TestScreen}
        options={{ headerTitle: 'Test' }}
      />
    </TestStack.Navigator>
  );
}

const LearnStack = createStackNavigator<LearnParamList>();

function LearnNavigator() {
    return (
        <LearnStack.Navigator>
            <LearnStack.Screen
                name="LearnScreen"
                component={LearnScreen}
                options={{headerTitle: 'Learn'}}
            />
        </LearnStack.Navigator>
    );
}
