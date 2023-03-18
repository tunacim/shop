import React from "react";
import { Text, TouchableOpacity} from "react-native";
import styles from "./Button.style"
const Button=({text,onPress})=>{
return(
    <TouchableOpacity style={styles.container}>
        <Text style={styles.title} onPress={onPress}>{text}</Text>
    </TouchableOpacity>
)
    

}
export default Button