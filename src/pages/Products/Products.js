import axios from "axios";
import React,{useState,useEffect} from "react";
import { SafeAreaView,Text,FlatList } from "react-native";
import Config from "react-native-config"
import ProductCard from "../../components/ProductCard"



function Products(){

    const[data,setData]=useState([])

    useEffect(()=>{ fetchData()},[])

    const fetchData= async()=>{
        const {data:productData}=await axios.get(Config.API_URL)
        setData(productData)
    }
    const renderProduct=({item})=><ProductCard product={item}></ProductCard>
    return(
        <SafeAreaView>
            <FlatList  data={data} renderItem={renderProduct}/>
        </SafeAreaView>
    )
} export default Products