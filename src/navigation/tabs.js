
import React from "react";
import {
  SafeAreaView,
  View,
  StatusBar,
  Text,
  TextInput,
  FlatList,
  Dimensions,
  StyleSheet,
  Image,
  Pressable,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import Home from '../screens/Home.js'
import Account from "../screens/Account.js";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';
import TabIcon from "../components/TabIcon.js";
const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { position: 'absolute',
        backgroundColor:"#fff" },
      }}
    >
      <Tab.Screen
      options={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon:({focused}) => <TabIcon focused={focused} icon={icon} />
      }}
        name="Home"
        component={Home}
        
      />
      <Tab.Screen 
      options={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon:({focused}) => <TabIcon focused={focused} icon={icon} />
      }}
      name="Account"
      component={Account}/>
    </Tab.Navigator>


  )
}
const screenOptions ={
  tabBarStyle:{
    backgroundColor:"red",
    height:"100"
  }
}
export default Tabs;
