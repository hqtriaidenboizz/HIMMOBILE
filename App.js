import React from "react";
import DiabetesCare from "./src/screens/DiabetesCare";
import {SafeAreaView,StyleSheet} from 'react-native';
import Home from "./src/screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./src/navigation/tabs";
import Stacks from "./src/navigation/Stacks";
import Detail from "./src/screens/DetailProduct";



function App () {
  return(
    <NavigationContainer>
      <Tabs/>
      {/* <Stacks/> */}
    </NavigationContainer>
    // <DiabetesCare/>
  )
}

const styles = StyleSheet.create({

})
export default App;