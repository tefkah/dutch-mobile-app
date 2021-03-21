
import { Layout, Button, Text } from '@ui-kitten/components';
import React, { useState } from 'react';
import { TouchableOpacity, View, Alert, StyleSheet } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import md5 from "md5";

import { Audio } from "expo-av";



export default function IPAConsonantScreen() {
    const [sound, setSound] = useState();
    const generateURL = (vowel: string) => {
        let filename: string = vowel + ".ogg";
        let url: string = "https://upload.wikimedia.org/wikipedia/commons/" + md5(filename).substring(0, 1) + "/" + md5(filename).substring(0, 2) + "/" + filename;
        console.log(url);
        return (url);
    };

    const consonantDict = {
        m: "Bilabial_nasal", n: "Alveolar_nasal", ŋ: 'Velar_nasal',
        p: 'Voiceless_bilabial_plosive', t: 'Voiceless_alveolar_plosive', k: 'Voiceless_velar_plosive',
        b: 'Voiced_bilabial_plosive', d: 'Voiced_alveolar_plosive', g: 'Voiced_velar_plosive',
        f: 'Voiceless_labiodental_fricative', s: 'Voiceless_alveolar_sibilant', x: 'Voiceless_uvular_fricative',
        v: 'Voiced_labiodental_fricative', z: 'Voiced_alveolar_sibilant', ɣ: 'Voiced_velar_fricative', h: 'Voiced_glottal_fricative',
        ʋ: 'Labiodental_approximant', l: 'Alveolar_lateral_approximant', j: 'Palatal_approximant',
        r: 'Alveolar_trill', ʀ: 'Uvular_trill',

    };


    const spellingDict = {
        m: "m", n: "n", ŋ: 'ng',
        p: 'p, b', t: 't, d', k: 'k',
        b: 'b', d: 'd', g: 'g',
        f: 'f (v)', s: 's', x: 'g, ch',
        v: 'v', z: 'z', ɣ: 'g, ch', h: 'h',
        ʋ: 'w', l: 'l', j: 'j',
        r: 'r', ʀ: 'r',

    };
    async function playSound(option: string) {
        const { sound } = await Audio.Sound.createAsync(
            { uri: generateURL(option) },
        );
        setSound(sound);
        console.log('playin sound');
        await sound.playAsync();
    }

    React.useEffect(() => {
        return sound
            ? () => {
                console.log('Unloading Sound');
                sound.unloadAsync();
            }
            : undefined;
    }, [sound]);

    const elementButton = (value: string) => (
        <TouchableOpacity onPress={() => alert(value)}>
            <View style={styles.btn}>
                <Text style={styles.btnText}>{value}</Text>
            </View>
        </TouchableOpacity>
    );

    const soundButton = (letter: string) => (
        <View style={{ flex: 1, flexDirection: 'row', width: 70, justifyContent: 'space-between', marginLeft: 10 }}>
            <View>
                <Text>{spellingDict[letter]}
                </Text>
            </View>
            <TouchableOpacity onPress={() => { playSound(consonantDict[letter]); alert(letter); }}>
                <View style={styles.btn}>
                    <Text style={styles.btnText}>/{letter}/</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
    const state = {
        tableTitle: ['Nasal', 'voiceless', 'voiced', 'voiceless', 'voiced', 'Approximant', 'Rhotic'],
        tableData: [
            ['Labial', soundButton('m'), soundButton('p'), soundButton('b'), soundButton('f'), soundButton('v'), soundButton('ʋ'), ''],
            ['Alveolar', soundButton('n'), soundButton('t'), soundButton('d'), soundButton('s'), soundButton('z'), soundButton('l'), soundButton('r')],
            ['Dorsal', soundButton('ŋ'), soundButton('k'), soundButton('g'), soundButton('x'), soundButton('ɣ'), soundButton('j'), soundButton('ʀ')],
            ['Glottal', '', '', '', '', soundButton('h'), '', ''],
        ]
    }

    return (
        <Layout style={{ flex: 1, justifyContent: 'center' }}>
            <View style={styles.container}>
                <Table style={{ flexDirection: 'row' }} borderStyle={{ borderWidth: 1 }}>
                    {/* Left Wrapper */}
                    <TableWrapper style={{ width: 80 }}>
                        <Cell data="" style={styles.singleHead} />
                        <TableWrapper style={{ flexDirection: 'row' }}>
                            <Col data={['H1', 'Plosive', 'Fricative', '', '']} style={styles.head} heightArr={[30, 60, 60, 30, 30, 30, 30]} textStyle={styles.text} />
                            < Col data={state.tableTitle} style={styles.title} heightArr={[30, 30, 30, 30, 30, 30, 30, 30]} textStyle={styles.titleText} ></Col>
                        </TableWrapper>
                    </TableWrapper>

                    {/* Right Wrapper */}
                    <TableWrapper style={{ flex: 1 }}>
                        <Cols data={state.tableData} heightArr={[40, 30, 30, 30, 30, 30, 30, 30]} textStyle={styles.text} />
                    </TableWrapper>
                </Table>
            </View>
            <View>
                <Text>On the left are the ways the sound is spelled, between // is the IPA letter corresponding to that letter</Text>
            </View>
        </Layout>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    singleHead: { width: 80, height: 40, backgroundColor: '#c8e1ff' },
    head: { flex: 1, backgroundColor: '#c8e1ff' },
    title: { flex: 2, backgroundColor: '#f6f8fa' },
    titleText: { marginRight: 6, textAlign: 'right' },
    text: { textAlign: 'center' },
    btn: { width: 30, height: 18, marginLeft: 'auto', backgroundColor: '#c8e1ff', borderRadius: 2 },
    btnText: { textAlign: 'center' }
});
