import React, { Component } from "react";
//import "../assets/style.css";
import QuizService from "../questionAPI";
import QuestionBox from "./QuestionBoxSimple";
import Result from "./ResultThing";
import { Card, Text, Button } from "@ui-kitten/components";
import { View } from "react-native";


export interface Props {
  numberOfQuestions: number,
  vowels: any[],
  navigation: any,
  hardMode: boolean,
  mode: string,
}

interface State {
  questionBank: any[],
  answers: string[],
  score: number,
  responses: number,
  numberOfQuestions: number,
  vowel: any[],
  hardMode: boolean,
  mode: string,
};

class Quiz extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      questionBank: [],
      answers: [],
      score: 0,
      responses: 0,
      numberOfQuestions: props.numberOfQuestions,
      vowel: props.vowels,
      hardMode: props.hardMode,
      //      mode: props.mode,
    };
  };



  getQuestions = () => {
    QuizService(this.state.numberOfQuestions, this.state.vowel[0]).then(options => {
      let randomAnswers = options.map((option) => {
        let answer: string = option.options[Math.floor(Math.random() * option.options.length)];
        return {
          "options": option.options,
          "questionId": option.questionId,
          "correctAnswer": answer,
        };
      });
      this.setState({
        questionBank: randomAnswers
      });
    });

  };

  computeAnswer = (answer: any) => {
    this.setState({
      score: this.state.score + answer
    });

    this.setState({
      responses: this.state.responses < this.state.numberOfQuestions ? this.state.responses + 1 : this.state.numberOfQuestions
    });
  };

  playAgain = () => {
    this.getQuestions();
    this.setState({
      score: 0,
      responses: 0
    });
  };



  componentDidMount() {
    this.getQuestions();
    console.log(this.props.mode + "quizmount");
  };

  render() {
    return (
      <View>
        {
          this.state.questionBank.length > 0 &&
          this.state.responses < this.state.numberOfQuestions &&
          <QuestionBox
            antwoord={this.state.questionBank[this.state.responses].correctAnswer}
            options={this.state.questionBank[this.state.responses].options.sort(() => Math.random() - 0.5)}
            key={this.state.questionBank[this.state.responses].questionId}
            selected={this.computeAnswer}
            hardMode={this.state.hardMode}
            mode={this.props.mode}
          />
        }

        {
          this.state.responses === this.state.numberOfQuestions ? (
            <Result
              numberOfQuestions={this.state.numberOfQuestions}
              score={this.state.score}
              playAgain={this.playAgain}
              navigation={this.props.navigation}
            />
            //<Button
            //  onPress={() => {
            //    this.playAgain()
            //  }}> Again {this.state.score}/{this.state.numberOfQuestions} </Button>
            //<Result
            //  score={this.state.score}
            //  playAgain={this.playAgain}
            //  goBack={this.props.goBack}
            //  numberOfQuestions={this.state.numberOfQuestions}
            //  setGameoption={this.props.setGameOptions}
            // />
          ) : null
        }
      </View>
    );
  }
}

export default Quiz;
