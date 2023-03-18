import React from "react";
import {View,Image,SafeAreaView} from "react-native"
import Button from "../../components/Button/Button";
import Input from "../../components/Input";
import styles from "./Login.style"
const Login=()=>{
    return(
        <SafeAreaView style={styles.container}>
        <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../../assets/login_logo.png")}/>
        </View>
        <View style={styles.bodyContainer}>
        <Input placeholder="Kullanıcı adını giriniz"></Input>
            <Input placeholder="Şifrenizi giriniz"></Input>
            <Button text="Giriş yap"></Button>
        </View>
        </SafeAreaView>
    )
}
export default Login