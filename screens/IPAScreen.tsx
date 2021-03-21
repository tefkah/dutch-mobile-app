import { Layout, Button, Text } from '@ui-kitten/components';
import * as React from 'react';
import { View } from 'react-native';
export default function IPAScreen({ navigation }) {
    return (
        <Layout style={{ flex: 1, justifyContent: 'center' }}>
            <Text>Select your options</Text>
            <Button
                onPress={() => {
                    navigation.navigate('IPAConsonantScreen');
                }}
            >Consonant Chart</Button>
            <Button
                onPress={() => {
                    navigation.navigate('IPAVowelScreen');
                }}
            >Vowel Chart</Button>
            <Button
                onPress={() => {
                    navigation.navigate('IPAExplanationScreen');
                }}
            > What is IPA? </Button>
        </Layout>
    );
}
