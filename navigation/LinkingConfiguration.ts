import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Practice: {
            screens: {
              PracticeScreen: 'practice',
            },
          },
          Test: {
            screens: {
              TestScreen: 'test',
            },
          },
          Learn: {
            screens: {
              LearnScreen: 'learn',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
