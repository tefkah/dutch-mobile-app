import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Button, Layout } from '@ui-kitten/components';
import EditScreenInfo from '../components/EditScreenInfo';

export default function TestScreen({ navigation }) {
  return (
    <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={styles.container}>
        <Text style={styles.title}> Test </Text>
        <View style={styles.separator} />

        <Button
          onPress={() => { navigation.navigate('OptionsScreen', { mode: 'spelling' }) }}
        >op</Button>
      </View>
    </Layout>
  );
}

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
