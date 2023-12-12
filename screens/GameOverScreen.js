import { View, Text, StyleSheet } from "react-native";
import Title from "../components/Title";
import PrimaryButton from "../components/PrimaryButton";
import Colors from "../constants/color";

const GameOverScreen = ({ roundsNumber, userNumber, starNewGame }) => {
  return (
    <View style={styles.rootContainer}>
      <Title>Game Is Over</Title>
      <Text style={styles.summaryText}>
        Your Phone needed <Text style={styles.highlight}>{roundsNumber}</Text> rounds to
        guess the number <Text style={styles.highlight}>{userNumber}</Text>
      </Text>
      <PrimaryButton onPress={starNewGame}>Start New Game</PrimaryButton>
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  summaryText: {
    fontSize: 24,
    textAlign: "center",
    margin: 20,
    color:Colors.accent,
    fontWeight:'bold'
  },
  highlight: {
    color: Colors.primary8,
    fontWeight: "bold",
  },
});
