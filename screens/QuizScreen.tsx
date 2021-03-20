import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text, Layout, Divider, Card, Icon } from '@ui-kitten/components';
//import Slider from "@ant-design/react-native/lib/slider";
//import EditScreenInfo from '../components/EditScreenInfo';
import QuestionBox from '../components/QuestionBoxSimple';
import Quiz from '../components/Quiz'

const SoundIcon = (props: any) => (
    <Icon {...props} name='volume-up' />
);


export default function QuizScreen({ route, navigation }) {

    const Header = (props: any) => (
        <View {...props}>
            <Text category='h6'> Is it {} or {props.opt2} </Text>
        </View>
    );

    function optionFunc() {
        var options: any[] = ["Option 1", "Option 2"];
        return options;
    }

    const { vowels } = route.params;
    //const { gameOptions } = route.params
    const gameOptions: any = [5, "a, aa"];
    const { numberOfQuestions } = route.params;
    return (
        //<QuestionBox options={optionFunc()} />
        <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Quiz
                vowels={vowels}
                numberOfQuestions={numberOfQuestions}
                navigation={navigation}
            />
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
