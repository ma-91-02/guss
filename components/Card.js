import { View , StyleSheet } from "react-native";

import Colors from "../constants/color";
const Card = ({ children }) => {
  return <View style={styles.card}>{children}</View>;
};

export default Card;


const styles = StyleSheet.create({
    card:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:36,
        marginHorizontal:24,
        padding:16,
        backgroundColor: Colors.primary8,
        borderRadius:10,
        elevation:16,
        shadowColor:'black',
        shadowOffset:{width: 0, height:2},
        shadowRadius:8,
        shadowOpacity: 0.30
    
    }
})
