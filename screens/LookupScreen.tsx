

import { Layout, Button, Text, Input } from '@ui-kitten/components';
import React, { useState } from 'react';
import { View } from 'react-native';
import { Audio } from 'expo-av';
import md5 from 'md5';
export default function LookupScreen() {
    const [errorMessage, setError] = useState(false)
    const [word, setWord] = useState("");
    const [sound, setSound] = useState();
    const generateURL = (vowel: string) => {
        let filename: string = "Nl-" + vowel + ".ogg";
        let url: string = "https://upload.wikimedia.org/wikipedia/commons/" + md5(filename).substring(0, 1) + "/" + md5(filename).substring(0, 2) + "/" + filename;
        console.log(url);
        return (url);
    };

    async function playSound(option: string) {
        try {
            const { sound } = await Audio.Sound.createAsync(
                { uri: generateURL(option) },
            );
            setError(false);
            console.log(sound);
            console.log('after await');
            setSound(sound);
            console.log('after set');
            console.log('playin sound');
            await sound.playAsync();
        }
        catch (e) {
            setError(true);
            console.log('Sound not loaded')
            sound.unloadAsync();

        }

    }

    React.useEffect(() => {
        return sound
            ? () => {
                console.log('Unloading Sound');
                sound.unloadAsync();
            }
            : undefined;
    }, [sound]);
    return (
        <Layout style={{ flex: 1, justifyContent: 'center' }}>
            <Text>Select your options</Text>
            <Input
                placeholder={"Enter a Dutch word"}
                value={word}
                onChangeText={nextValue => setWord(nextValue)}
            />
            <Button
                onPress={() => { try { playSound(word.trim().toLowerCase()) } catch (error) { setError(true) } }}
            >Get Pronunciaton</Button>
            {errorMessage ? <Text> Oops, that's not a word </Text> : <Text> IPA </Text>}
        </Layout>
    );
}
