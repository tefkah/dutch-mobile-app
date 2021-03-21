
import { Layout, Button, Text } from '@ui-kitten/components';
import * as React from 'react';
import { View } from 'react-native';
export default function IPAExplanationScreen() {
    return (
        <Layout style={{ flex: 1, justifyContent: 'center' }}>
            <Text>Select your options</Text>
            <Button>Consonant Chart</Button>
            <Button>Vowel Chart</Button>
            <Button> What is the IPA? </Button>
        </Layout>
    );
}
