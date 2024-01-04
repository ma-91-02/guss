import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  Dimensions,
} from "react-native";

const NumberContainer = ({ children }) => {
  const { width, height } = useWindowDimensions();

  let styleContainer = {
    padding: width < 420 ? 16 : 24,
    margin: width < 420 ? 16 : 24,
    borderWidth: width < 420 ? 3 : 4,
  };
  let styleText = {
    fontSize: width < 420 ? 24 : 34,
  };
  if (height < 500) {
    styleContainer = {
      padding: 16,
      margin: 16,
      borderWidth: 3,
    };
    styleText = {
      fontSize: 24,
    };
  }
  return (
    <View style={[styles.container, styleContainer]}>
      <Text style={[styles.text, styleText]}>{children}</Text>
    </View>
  );
};

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    borderColor: "#fff",

    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    width: "60%",
  },
  text: {
    color: "#fff",
    fontWeight: "bold",
  },
});
