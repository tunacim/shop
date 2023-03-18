import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{backgroundColor:"orange",flex:1},
    logoContainer:{flex:1,justifyContent:"center"},
    bodyContainer:{flex:1},
    logo:{height:Dimensions.get("window").height/3,alignSelf:"center",resizeMode:"contain",tintColor:"white"}
})