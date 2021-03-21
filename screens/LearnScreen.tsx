import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from "@ui-kitten/components";
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { createStackNavigator } from '@react-navigation/stack';
import SelectLearningScreen from './SelectLearningScreen';
import IPAScreen from './IPAScreen';
import VowelScreen from './VowelScreen';
import ConsonantScreen from './ConsonantScreen';
import IPAVowelScreen from './IPAVowelScreen';
import IPAConsonantScreen from './IPAConsonantScreen';
import IPAExplanationScreen from './IPAExplanationScreen';
import LookupScreen from './LookupScreen';

export default function LearnScreen() {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator
            initialRouteName="SelectLearningScreen"
            screenOptions={{
                headerShown: false,
            }}>
            <Stack.Screen
                name="SelectLearningScreen"
                component={SelectLearningScreen}
            />
            <Stack.Screen
                name="IPAScreen"
                component={IPAScreen}
            />
            <Stack.Screen
                name="IPAConsonantScreen"
                component={IPAConsonantScreen}
            />
            <Stack.Screen
                name="IPAVowelScreen"
                component={IPAVowelScreen}
            />
            <Stack.Screen
                name="IPAExplanationScreen"
                component={IPAExplanationScreen}
            />
            <Stack.Screen
                name="VowelScreen"
                component={VowelScreen}
            />
            <Stack.Screen
                name="ConsonantScreen"
                component={ConsonantScreen}
            />
            <Stack.Screen
                name="LookupScreen"
                component={LookupScreen}
            />
        </Stack.Navigator>
    );
}

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
