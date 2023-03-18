import React from "react";
import { TextInput,View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import styles from "./Input.style"

const Input=({placeholder,onChangeText,value,iconName,isSecure})=>{
return(
    <View style={styles.container}>
        <TextInput placeholder={placeholder} onChangeText={onChangeText} value={value} style={styles.input} secureTextEntry={isSecure}></TextInput>
        <Icon name={iconName} size={23} color="gray"></Icon>
    </View>
)
}
export default Input