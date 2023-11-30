import { Text, StyleSheet } from "react-native";

const InstructionText = ({ children }) => {
    return <Text style={styles.instructionText}>{children}</Text>;
    }

export default InstructionText;

const styles = StyleSheet.create({
    instructionText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "white",
    },
});

