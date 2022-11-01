import React from "react";
import DiabetesCare from "./src/screens/DiabetesCare";
import {SafeAreaView,StyleSheet} from 'react-native';
import Home from "./src/screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./src/navigation/tabs";


function App () {
  return(
    // <NavigationContainer>
    //   <Tabs/>
    // </NavigationContainer>
    <DiabetesCare/>
  )
}

const styles = StyleSheet.create({

})
export default App;