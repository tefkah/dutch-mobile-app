import * as React from 'react';
import {StyleSheet} from 'react-native';
import {Button, Text, Layout, Divider} from '@ui-kitten/components';
//import EditScreenInfo from '../components/EditScreenInfo';
import { View } from '../components/Themed';

export default function PracticeScreen() {
  return (
    <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={styles.title}>Practice</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text>Select the thing you want to test</Text>
      <Divider/>
      <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Button style={{width: 200}} appearance="outline">Pronunciation</Button>
        <Button style={{width: 200}} appearance="outline">Spelling</Button>
      </Layout>
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
