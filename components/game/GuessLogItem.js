import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/color";

const GuessLogItem = ({ roundNumber, guss }) => {
  return (
    <View style={styles.listItem}>
      <Text  style={styles.item}>#{roundNumber}</Text>
      <Text  style={styles.item}>Opponent's Guess{guss}</Text>
    </View>
  );
};

export default GuessLogItem;


const styles = StyleSheet.create({
    listItem:{
        borderRadius:40,
        flexDirection:'row',
        padding:20,
        marginVertical:8,
        backgroundColor:Colors.primary5,
        justifyContent:'space-between',
        alignItems:'center',
        textAlign:'center',
        width:'100%'
    }
    ,
    item:{
        color:Colors.accent
    }
})