import React from "react";
import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import Icon from "react-native-vector-icons/MaterialCommunityIcons" 


import Products from "./pages/Products";
import Detail from "./pages/Detail";
import Login from "./pages/Login";
import { useDispatch, useSelector } from "react-redux";
import Loading from "./components/Loading";


const Stack=createNativeStackNavigator()

const Router=()=>{

  const dispatch=useDispatch()
  const userSession=useSelector(s=>s.user)
  const isAuthLoading=useSelector(s=>s.isAuthLoading)

  return(
    <NavigationContainer>
      
        { isAuthLoading?
        (<Loading></Loading>):

         !userSession ?(
          <Stack.Navigator>
        <Stack.Screen name ="Login" component={Login} 
        options={{ headerShown:false}}/>
        </Stack.Navigator>):(

      
        <Stack.Navigator>
        <Stack.Screen name ="Products" component={Products} 
        options={{ title:"SHOP",headerStyle:{backgroundColor:"#CCCCFF"},headerTitleStyle:{color:"black"},
        headerRight:()=><Icon name={"logout"} size={30} onPress={()=>dispatch({type:"REMOVE_USER"})}></Icon>
        }}/>

        <Stack.Screen name ="Detail" component={Detail}
         options={{ title:"DETAİL",headerStyle:{backgroundColor:"aqua"},headerTitleStyle:{color:"black"},headerTintColor:"black"}} />
        
         </Stack.Navigator>
        )}
      
    </NavigationContainer>
  )
}
export default Router