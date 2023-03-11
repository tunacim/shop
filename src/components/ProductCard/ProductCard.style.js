import { StyleSheet } from "react-native";
export default StyleSheet.create({
    container:{backgroundColor:"#e0e0e0",borderColor:"#bdbdbd",borderWidth:1,margin:10,flexDirection:"row"},
    bodycontainer:{flex:1,padding:5,justifyContent:"space-between"},
    image:{width:100,borderRadius:50,minHeight:100,resizeMode:"contain",backgroundColor:"white"},
    title:{fontWeight:"bold",fontSize:18},
    price:{textAlign:"right",fontStyle:"italic",fontSize:16}
})