import { Button, Divider, Layout, Text } from "@ui-kitten/components";
import * as React from "react";
import { StyleSheet, View } from "react-native";

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
        <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={styles.container}>
                <Text style={styles.title}>Learn!</Text>
                <View style={styles.separator} />
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
        </Layout>
    );
}
