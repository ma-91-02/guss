import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Alert, FlatList } from "react-native";

import { AntDesign, Feather} from '@expo/vector-icons';
import Title from "../components/Title";
import Card from "../components/Card";
import InstructionText from "../components/InstructionText";
import PrimaryButton from "../components/PrimaryButton";
import NumberContainer from "../components/game/NumberContainer";
import GuessLogItem from "../components/game/GuessLogItem";
import Colors from "../constants/color";

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

let maxBoundary = 100;
let minBoundary = 1;

const GameScreen = ({ userNumber, onGameOver }) => {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([]);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guessRounds.length);
    }
  }, [userNumber, onGameOver, currentGuess]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie", "You know that this wrong...", [
        { text: "Sorry", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      maxBoundary = currentGuess;
      console.log(maxBoundary);
    } else {
      minBoundary = currentGuess + 1;
      console.log(minBoundary);
    }

    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRndNumber);
    setGuessRounds((prevGuessRounds) => [newRndNumber, ...prevGuessRounds]);
  };

  return (
    <View style={styles.container}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText style={styles.text}>Higher or lower?</InstructionText>
        <View style={styles.btnCont}>
          <View style={styles.btn}>
            <PrimaryButton
              style={styles.btnText}
              onPress={nextGuessHandler.bind(this, "lower")}
            >
              <Feather name="minus" size={24} color={Colors.accent} />
            </PrimaryButton>
          </View>
          <View style={styles.btn}>
            <PrimaryButton
              style={styles.btnText}
              onPress={nextGuessHandler.bind(this, "greater")}
            >
              <AntDesign name="plus" size={24} color={Colors.accent}/>
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <View>
        <FlatList
          data={guessRounds}
          renderItem={(itemData) => (
            <GuessLogItem roundNumber={itemData.index} guss={itemData.item} />
          )}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent:'center',
    alignItems: "center",
  },
  btnCont: {
    flexDirection: "row",
    // width: "100%",
  },
  btn: {
    flex: 1,
  },
  text: {
    marginBottom: 20,
    fontSize: 24,
    fontWeight: "400",
  },
  btnText: {
    fontSize: 20,
  },
});
