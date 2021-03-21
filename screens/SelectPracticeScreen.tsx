import { Button, Divider, Layout, Text } from "@ui-kitten/components";
import { View } from "../components/Themed";
import * as React from "react";
import { StyleSheet } from "react-native";


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

export default function SelectPracticeScreen({ navigation }) {
    return (
        <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
            <Text>Select the thing you want to practice, nerd</Text>
            <Divider />
            <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Button style={{ width: 200 }} appearance="outline"
                    onPress={() => navigation.navigate('OptionsScreen', { mode: 'spelling' })}>Spelling</Button>
                <Divider style={{ height: '1%' }} />
                <Button style={{ width: 200 }} appearance="outline"
                    onPress={() => navigation.navigate('OptionsScreen', { mode: 'pronunciation' })}>Pronunciation</Button>
                <Divider style={{ height: '1%' }} />
                <Button style={{ width: 200 }} appearance="outline"
                    onPress={() => navigation.navigate('OptionsScreen', { mode: 'ipa' })}>IPA</Button>
            </Layout>
        </Layout>
    );
}


