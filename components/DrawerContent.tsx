import * as React from 'react';
import { Button, Text } from '@ui-kitten/components';
import { Alert, View } from 'react-native';


export default function CustomDrawerContent({ navigation }) {
    return (
        <View style={{ marginTop: 30 }}>
            <Button
                onPress={() => {
                    // Navigate using the `navigation` prop that you received
                    alert('woop');
                }}
            >Woop</Button>
            <Text>Yooooooooooooooooooooo</Text>
        </View>
    );
}
