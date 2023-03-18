import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch=(url)=>{
     const [loading,setLoading]=useState(true);
    const [error,setError]=useState(null)
    const [data, setData] = useState([])

    const fetchData = async () => {
        try {
        const { data: responseData } = await axios.get(url)
        setData(responseData)
        setLoading(false)   
        } catch (err) {
            setError(err.message)
                  setLoading(false)
        }
    }

useEffect(() => {
        fetchData()
    }, [])

    return {error,loading,data}

}

export default useFetch;