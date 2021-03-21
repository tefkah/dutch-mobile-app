
import { Layout, Button, Text } from '@ui-kitten/components';
import * as React from 'react';
import { View } from 'react-native';
export default function IPAVowelScreen() {
    return (
        <Layout style={{ flex: 1, justifyContent: 'center' }}>
            <Text>Select your options</Text>
            <Button>Vowel Chart</Button>
        </Layout>
    );
}
