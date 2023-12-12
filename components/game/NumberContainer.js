import { View, Text, StyleSheet } from "react-native";


const NumberContainer =({children})=>{
    return(
        <View style={styles.container} >
            <Text style={styles.text}>{children}</Text>
        </View>
    )
}


export default NumberContainer;

const styles = StyleSheet.create({
    container:{
        borderWidth:4,
        borderColor:'#fff',
        padding:24,
        margin:24,
        borderRadius:8,
        alignItems:'center',
        justifyContent:'center',
        width:'60%'
    },
    text:{
        fontSize:34,
        color:'#fff',
        fontWeight:'bold'
    }
})