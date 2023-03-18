import React from "react";
import {View,Image,SafeAreaView, Alert} from "react-native"
import { Formik } from "formik";


import Button from "../../components/Button/Button";
import Input from "../../components/Input";
import styles from "./Login.style"
import usePost from "../../hooks/usePost";

function Login({navigation}){
     const {data,post,loading,error}=usePost()
    function handleLogin(values){
        post("https://fakestoreapi.com/auth/login",(values))
        
    }

    if(error){Alert.alert("Shop","Bir hata oluştu!!")}

    if(data){if(data.status==="error"){Alert.alert("Shop","Kullanıcı bulunamadı!")}else{navigation.navigate("Products")}
        console.log(data)}

    return(
        <SafeAreaView style={styles.container}>
        <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../../assets/login_logo.png")}/>
        </View>
        <Formik initialValues={{username:"",password:""}} onSubmit={handleLogin}>
            
            {({handleSubmit,handleChange,values})=>(<View style={styles.bodyContainer}>
            <Input placeholder="Kullanıcı adını giriniz" value={values.username} onChangeText={handleChange("username")} iconName={"account"}></Input>
           
            <Input placeholder="Şifrenizi giriniz" value={values.password} onChangeText={handleChange("password")} iconName={"key"} isSecure></Input>
            <Button text="Giriş yap" onPress={handleSubmit} loading={loading}></Button>
            </View>)}
         </Formik>
        </SafeAreaView>
    )
}
export default Login