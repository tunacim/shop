import React from "react";
import { SafeAreaView ,Text,View,Image} from "react-native";
import useFetch from "../../hooks/useFetch";
import styles from "./Detail.style"
import Error from "../../components/Error";
import Loading from "../../components/Loading";
import Config from "react-native-config"

function Detail({route}){

    const{id}=route.params
    const{loading,error,data}=useFetch(Config.API_URL +"/"+id)

    if(loading){return <Loading />}
    if(error){return <Error></Error>}
    
    return(
        <View style={styles.container}>
            <Image source={{uri:data.image}}style={styles.image}></Image>
            <View style={styles.innercontainer}>
            <Text style={styles.title}>{data.title}</Text>
            <Text style={styles.desc}>{data.description}</Text>
            <Text style={styles.price}>{data.price}</Text>
            </View>
        </View>
    )
} export default Detail