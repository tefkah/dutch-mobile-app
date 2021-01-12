import * as React from 'react';
import {StyleSheet} from 'react-native';
import {Button, Text, Layout, Divider} from '@ui-kitten/components';
//import Slider from "@ant-design/react-native/lib/slider";
//import EditScreenInfo from '../components/EditScreenInfo';



export default function OptionsScreen({route, navigation}) {
    const {mode} = route.params
    return (
        <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Select your options</Text>
            <Divider/>
            <Text>{mode}</Text>
            <Button onPress={()=>{navigation.navigate('Quiz')}}>GO</Button>
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
