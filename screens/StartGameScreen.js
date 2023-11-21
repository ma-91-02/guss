import { View, TextInput, Text, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

import Colors from "../constants/color";

const StartGameScreen = () => {
  //start game screen
  return (
    <View style={styles.rootContainer}>
      <TextInput style={styles.numberInput} />

      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
    backgroundColor: "red",
  },
  numberInput: {
    width: 50,
    height: 50,
    fontSize: 32,
    borderBottomWidth: 2,
    borderColor: Colors.accent,
    textAlign: "center",
    color: Colors.accent,
    marginVertical: 8,
    fontWeight: "bold",
  },
  buttonsContainer: {
    flexDirection: "row",
    // justifyContent: 'space-between',
  },
  buttonContainer: {
    flex: 1,
  },
});
