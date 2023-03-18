import React from "react";
import { TextInput,View } from "react-native";
import styles from "./Input.style"
const Input=({placeholder,onChangeText})=>{
return(
    <View style={styles.container}>
        <TextInput placeholder={placeholder} onChangeText={onChangeText}></TextInput>
    </View>
)
}
export default Input