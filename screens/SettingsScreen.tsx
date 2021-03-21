import * as React from 'react';
import { Button, Text, Layout } from '@ui-kitten/components';
import { View } from 'react-native';

export default function SettingsScreen({ navigation }) {
    React.useEffect(() => {
        const xx = navigation.addListener('drawerClose', (e) => {
            console.log(e);
            console.log(close);
        });
        return xx;
    }, [navigation]);
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
        </Layout>
    )
}
