import axios from "axios";
import React,{useState,useEffect} from "react";
import { SafeAreaView,Text,FlatList,ActivityIndicator } from "react-native";
import Config from "react-native-config"
import ProductCard from "../../components/ProductCard"
import useFetch from "../../hooks/useFetch";



const Products=()=>{
    const{loading,data,error}=useFetch(Config.API_URL)
    

   
    if(loading){return <ActivityIndicator  size={"large"}/>}
    if(error){return <Text>{error}</Text>}
    const renderProduct=({item})=><ProductCard product={item}></ProductCard>

    return(
        <SafeAreaView>
            <FlatList  data={data} renderItem={renderProduct}/>
        </SafeAreaView>
    )
} 
export default Products