import React from "react";
import { Button, Text } from "@ui-kitten/components";
import { View } from "react-native";

const Result = (props) => (
  <View>
    <Text>You scored {props.score}/ {props.numberOfQuestions} correct answers, ya ding dong</Text>
    <Button onPress={props.playAgain}>
      Play Again, if you dare...
      </Button>
    <Button onPress={() => { props.setGameoption(0) }}>Change Settings</Button>
    <Button onPress={props.goBack}> Quit </Button>
  </View>
);

export default Result;
