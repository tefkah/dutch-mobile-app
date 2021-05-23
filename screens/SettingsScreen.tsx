import * as React from 'react';
import { Button, Text, Layout } from '@ui-kitten/components';
import { View } from 'react-native';

export default function SettingsScreen({ navigation }) {
    return (
        <Layout style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
                onPress={() => { navigation.navigate('Root') }}
                appearance='outline'
                style={{ width: 200 }}
            >
                Exit without Saving
            </Button>
            <Button
                onPress={() => { navigation.navigate('Root') }}
                style={{ width: 200 }}
            >
                Save and Exit
            </Button>
            <Button
                onPress={() => { navigation.toggleDrawer() }}>
                Toggle Drawer
            </Button>
        </Layout>
    )
}
