import { View, TextInput, Text, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

import Colors from "../constants/color";
import Card from "../components/Card";

const StartGameScreen = () => {
  //start game screen
  return (
    <View style={styles.rootContainer}>
      <Card>
        <TextInput
          maxLength={2}
          keyboardType="number-pad"
          autoCorrect={false}
          autoCapitalize="none"
          style={styles.numberInput}
        />

        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={()=>{console.log('reset pressed')}}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={()=>{console.log('confirm pressed')}}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
    // backgroundColor: "",
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
  },
  buttonContainer: {
    flex: 1,
  },
});
