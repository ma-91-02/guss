import {
  View,
  Text,
  Pressable,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import Colors from "../constants/color";

const PrimaryButton = ({ children, onPress, style }) => {
  const { width, height } = useWindowDimensions();

  let btnText = {
    fontSize: 20,
  };
if(width<420){
  btnText={
    fontSize:16
  }
}
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        android_ripple={{ color: Colors.primary5 }}
        onPress={onPress}
      >
        <Text style={{ ...styles.buttonText, ...style , ...btnText}}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: Colors.primary5,
    paddingHorizontal: 16,
    paddingVertical: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    shadowOpacity: 0.3,
  },
  buttonText: {
    color: Colors.accent,
    textAlign: "center",
    // fontWeight: "bold",

    fontFamily: "u-b",
  },
  pressed: {
    opacity: 0.5,
  },
});
