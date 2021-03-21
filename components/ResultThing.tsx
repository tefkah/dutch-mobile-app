import * as React from "react";
import { Button, Text } from "@ui-kitten/components";
import { View } from "react-native";

export default function Result(props, { route, navigation }) {
    return (
        <View>
            <Button
                onPress={() => {
                    props.navigation.navigate('OptionsScreen');
                }}>
                Change Options
        </Button>
            <Button
                onPress={() => {
                    props.playAgain()
                }}> Again {props.score}/{props.numberOfQuestions}
            </Button>
        </View>
        //<Result
        //  score={this.state.score}
        //  playAgain={this.playAgain}
        //  goBack={this.props.goBack}
        //  numberOfQuestions={this.state.numberOfQuestions}
        //  setGameoption={this.props.setGameOptions}
        // />
    );
}
