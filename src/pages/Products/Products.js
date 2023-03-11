import axios from "axios";
import React,{useState,useEffect} from "react";
import { SafeAreaView,Text,FlatList,ActivityIndicator } from "react-native";
import Config from "react-native-config"
import Error from "../../components/Error";
import Loading from "../../components/Loading";
import ProductCard from "../../components/ProductCard"
import useFetch from "../../hooks/useFetch";
import styles from "./Products.style"



const Products=({navigation})=>{
    const{loading,data,error}=useFetch(Config.API_URL)
    
    const handleProductSelect=id=>{
        navigation.navigate("Detail",{id})
    }
   
    if(loading){return <Loading />}
    if(error){return <Error></Error>}
    const renderProduct=({item})=><ProductCard product={item} onSelect={()=>handleProductSelect(item.id)}></ProductCard>

    return(
        <SafeAreaView style={styles.container}>
            <FlatList  data={data} renderItem={renderProduct}/>
        </SafeAreaView>
    )
} 
export default Products