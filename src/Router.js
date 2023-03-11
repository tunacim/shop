import React from "react";
import { Text,SafeAreaView } from "react-native";           
import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import Products from "./pages/Products";
import Detail from "./pages/Detail";


const Stack=createNativeStackNavigator()

function Router(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name ="Products" component={Products} 
        options={{ title:"SHOP",headerStyle:{backgroundColor:"#CCCCFF"},headerTitleStyle:{color:"black"}}}/>
        <Stack.Screen name ="Detail" component={Detail}
         options={{ title:"DETAİL",headerStyle:{backgroundColor:"aqua"},headerTitleStyle:{color:"black"},headerTintColor:"black"}} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}export default Router