import React, { useState } from "react";
import { Button, Card, Layout, Text } from "@ui-kitten/components";
import { View, StyleSheet } from "react-native";



export default function QuestionBox(props: any) {
  let title: string = "Is it " + props.options[0] + " or " + props.options[1] + "?";
  const [answered, setAnswered] = useState(0);

  const Header: any = () => (
    <View {...props}>
      <Text category='h6'>  {title} </Text>
    </View>
  );

  return (
    <Layout style={styles.topContainer} level='1' >
      <Card header={Header}>
        <View >
          <Text>{props.antwoord}</Text>
          <Button
            // className="answerBtn"
            onPress={() => {
              props.selected(+(props.options[0] === props.antwoord));
              setAnswered(1);
            }
            }
          //disabled={+(answered)}
          //type={(answered===1) ? "primary" : "default"}
          >
            {props.options[0]}
          </Button>
          <Button
            //className="answerBtn"
            onPress={() => {
              props.selected(+(props.options[1] === props.antwoord));
              setAnswered(2);
            }
            }
          //disabled={+(answered)}
          //type={(answered===2) ? "primary" : "default"}
          >
            {props.options[1]}
          </Button>
        </View>
      </Card>
    </Layout>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    flex: 1,
    margin: 2,
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  footerControl: {
    marginHorizontal: 2,
  },
});
