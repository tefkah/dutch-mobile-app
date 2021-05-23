import * as React from 'react';
import { Button, Text, Toggle, Layout, Divider } from '@ui-kitten/components';
import { Alert, View } from 'react-native';
import { ThemeContext } from './theme-context';
import { light } from '@eva-design/eva';
import DownloadFiles from './DownloadFiles'

export default function CustomDrawerContent({ navigation }) {

    let text = require('../questionAPI/words.json');
    const words: string[] = text.words;
    const themeContext = React.useContext(ThemeContext)
    return (
        <Layout style={{ height: '100%', justifyContent: 'center' }} >
            <View style={{ marginTop: 30, height: '80%' }}>
                <Text category='h2'> Dutch Vowel App </Text>
                <Divider />
                <Button
                    onPress={() => {
                        // Navigate using the `navigation` prop that you received
                        navigation.navigate('SettingsScreen');
                    }}
                >Button
                </Button>
                <Text>Yooooooooooooooooooooo</Text>
                <Toggle checked={themeContext.theme === 'dark'} onChange={themeContext.toggleTheme}>
                    {'DarkMode'}
                </Toggle>
                <Button onPress={() => { DownloadFiles(words) }}>
                    Download Files
                </Button>
            </View >
        </Layout>
    );
}
