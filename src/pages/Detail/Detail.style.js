import { StyleSheet,Dimensions } from "react-native";
const deviceSize=Dimensions.get("window")
export default StyleSheet.create({
    container:{flex:1,backgroundColor:"aqua"},
    image:{width:deviceSize.width,height:deviceSize.height/3,resizeMode:"contain",backgroundColor:"white"},
    title:{fontWeight:"bold",fontSize:25},
    desc:{fontStyle:"italic",margin:5},
    price:{fontWeight:"bold",fontSize:22,textAlign:"right"},
    innercontainer:{padding:10,}

})