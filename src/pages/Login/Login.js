import React from "react";
import {View,Image,SafeAreaView} from "react-native"
import { Formik } from "formik";

import Button from "../../components/Button/Button";
import Input from "../../components/Input";
import styles from "./Login.style"

const Login=()=>{
    function handleLogin(value){
        console.log(value)

    }
    return(
        <SafeAreaView style={styles.container}>
        <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../../assets/login_logo.png")}/>
        </View>
        <Formik initialValues={{username:"",password:""}} onSubmit={handleLogin}>
            
            {({handleSubmit,handleChange,values})=>(<View style={styles.bodyContainer}>
            <Input placeholder="Kullanıcı adını giriniz" value={values.username} onChangeText={handleChange("username")}></Input>
            <Input placeholder="Şifrenizi giriniz" value={values.password} onChangeText={handleChange("password")}></Input>
            <Button text="Giriş yap" onPress={handleSubmit}></Button>
            </View>)}
         </Formik>
        </SafeAreaView>
    )
}
export default Login