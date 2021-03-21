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
export default function SelectLearningScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Learn!</Text>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
            <Divider style={{ height: '1%' }} />
            <Button style={{ width: 200 }} appearance="outline"
                onPress={() => {
                    navigation.navigate('IPAScreen');
                }}>
                Learn IPA
            </Button>
            <Divider style={{ height: '1%' }} />
            <Button style={{ width: 200 }} appearance="outline"
                onPress={() => {
                    navigation.navigate('VowelScreen');
                }}>
                Vowels
            </Button>
            <Divider style={{ height: '1%' }} />
            <Button style={{ width: 200 }} appearance="outline"
                onPress={() => {
                    navigation.navigate('ConsonantScreen');
                }}>
                Consonants
            </Button>
            <Divider style={{ height: '1%' }} />
            <Button style={{ width: 200 }} appearance="outline"
                onPress={() => {
                    navigation.navigate('LookupScreen');
                }}>
                Look up Word Pronunciation
            </Button>
        </View>
    );
}
