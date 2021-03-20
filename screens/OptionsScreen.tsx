import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text, Layout, Divider, Toggle } from '@ui-kitten/components';
//import Slider from "@ant-design/react-native/lib/slider";
//import EditScreenInfo from '../components/EditScreenInfo';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';
import { MaterialIcons } from '@expo/vector-icons';
import { SliderPicker } from 'react-native-slider-picker';

const vowelList = ["a", "aa", "e", "ee", "i", "ie", "o", "oo", "u", "uu", "au/ou", "ei/ij", "eu", "ui"];
const vowel =
    [
        {
            name: "Lax/Short Vowels",
            id: 0,
            //icon:
            children: [
                {
                    name: 'a',
                    id: 1,
                },
                {
                    name: 'e',
                    id: 2,
                },
                {
                    name: 'i',
                    id: 3,
                },
                {
                    name: 'o',
                    id: 4,
                },
                {
                    name: 'u',
                    id: 5,
                },
            ],
        },
        {
            name: "Tense/Long",
            id: 10,
            //icon:
            children: [
                {
                    name: 'aa',
                    id: 11,
                },
                {
                    name: 'ee',
                    id: 12,
                },
                {
                    name: 'ie',
                    id: 13,
                },
                {
                    name: 'oo',
                    id: 14,
                },
                {
                    name: 'uu',
                    id: 15,
                },
            ],
        },
        {
            name: "Diphthongs and others",
            id: 20,
            //icon:
            children: [
                {
                    name: 'au/ou',
                    id: 21,
                },
                {
                    name: 'ei/ij',
                    id: 22,
                },
                {
                    name: 'eu',
                    id: 23,
                },
                {
                    name: 'ui',
                    id: 24,
                },
                {
                    name: 'oe',
                    id: 25,
                },
            ],
        },
    ];

export default function OptionsScreen({ route, navigation }) {
    //const [vowels, setVowels] = useState({ 'a': true, 'aa': true, "e": false, "ee": false, "i": false, "ie": false, "o": false, "oo": false, "u": false, "uu": false, "au/ou": false, "ei/ij": false, "eu": false, "ui": false });
    const { mode } = route.params;
    const [selectItems, setSelectItems] = React.useState([]);
    const [selectedObjects, setSelectedObjects] = React.useState([]);
    const [numberOfQuestions, setNumber] = React.useState(10);
    const [hardMode, setHardMode] = React.useState(false);

    const onSelectedItemsChange = (selected) => {
        setSelectItems(selected);
        //    console.log(vowel[0].children);
    };

    const onSelectedObjects = selected => {
        setSelectedObjects(selected);
        //console.log(selectedObjects);
    }

    const onCheckedChange = (isChecked: boolean) => {
        setHardMode(isChecked);
    };

    const vowelList = () => {
        const vowelz: string[] = [];
        for (let i = 0; i < selectedObjects.length; i++) {
            vowelz.push(selectedObjects[i].name);
        }
        console.log(vowelz);
        return (vowelz);
    };

    const makeVowelCombos = (v: any[]) => {
        const vowelCombos: string[] = [];
        for (let i = 0; i < v.length - 1; i++) {
            for (let j = i + 1; j < v.length; j++) {
                let tempo: string[] = [v[i], v[j]].sort();
                vowelCombos.push(tempo[0] + ", " + tempo[1]);
            }
        }
        return (vowelCombos);
    };

    return (
        <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Select your options</Text>
            <View>
                <SectionedMultiSelect
                    style={{ width: 400 }}
                    items={vowel}
                    IconRenderer={MaterialIcons}
                    uniqueKey="id"
                    subKey="children"
                    selectText="Pick your poison"
                    showDropDowns={false}
                    readOnlyHeadings={true}
                    hideSearch={true}
                    selectedItems={selectItems}
                    onSelectedItemsChange={onSelectedItemsChange}
                    onSelectedItemObjectsChange={onSelectedObjects}
                />
            </View>
            <Text>Select how many questions you want</Text>
            <SliderPicker
                minlabel={'min'}
                maxlabel={'max'}
                midlabel={'lol'}
                maxValue={20}
                showNumberScale={true}
                showSeparatorScale={true}
                defaultValue={numberOfQuestions}
                callback={position => { setNumber(position) }}
                labelFontColor={"#6c7682"}
                labelFontWeight={'600'}
                showFill={true}
                fillColor={'green'}
                labelFontWeight={'bold'}
                showNumberScale={true}
                showSeparatorScale={true}
                buttonBackgroundColor={'#fff'}
                buttonBorderColor={"#6c7682"}
                buttonBorderWidth={1}
                scaleNumberFontWeight={'300'}
                buttonDimensionsPercentage={6}
                heightPercentage={1}
                widthPercentage={80}
            />
            <Text>{numberOfQuestions}</Text>
            <Divider />
            <Text>{mode}</Text>
            <Toggle checked={hardMode} onChange={onCheckedChange}>
                {`Hardmode (type instead of multiple choice): ${hardMode}`}
            </Toggle>
            <Button onPress={() => {
                const v = vowelList();
                if (v.length < 2) {
                } else {
                    console.log(v);
                    const w = makeVowelCombos(v);
                    console.log(numberOfQuestions);
                    console.log(hardMode + "in optionsscreen");
                    navigation.navigate('Quiz', { vowels: w, numberOfQuestions: numberOfQuestions, hardMode: hardMode });
                }
            }
            }
            >
                Go
            </Button>
        </Layout>
    );
}

//Tester

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
