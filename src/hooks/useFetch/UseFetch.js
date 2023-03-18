import { useEffect,useState } from "react"
import axios from "axios"

function UseFetch(url){

    const[error,setError]=useState(null)
    const[loading,setLoading]=useState(true)
    const[data,setData]=useState([])

    const fetchData= async()=>{
        try {
            setLoading(true)
            const {data:responseData}=await axios.get(url)
            
        setData(responseData)
        setLoading(false)
        } catch (error) {
            console.log(error)
            setError(error.message)
            setLoading(false)
        }
    }


    useEffect(()=>{
         fetchData()
    },[])
    

 return{error,loading,data}
}
export default UseFetch