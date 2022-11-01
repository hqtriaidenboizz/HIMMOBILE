
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
import Icon from 'react-native-vector-icons/Feather';
import Cart from "../screens/Cart.js";
import Notification from "../screens/Notificaition.js";
import AddNew from "../screens/AddNew.js";
import DiabetesCare from "../screens/DiabetesCare.js";
const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          // position: 'absolute',
          backgroundColor: "#fff",
          height:50
        },
      }}
    >
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <Icon name="home" style={focused ? styles.focused : styles.unfocused } size={20} />
          )
        }}
        name="Home"
        component={Home}
      />

      <Tab.Screen
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused}) => (
            <Icon name="bell" style={focused ? styles.focused : styles.unfocused } size={20} />
          )

        }}
        name="Notification"
        component={Notification}
      />

      <Tab.Screen
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused}) => (
            <Icon name="plus-square" style={styles.addnewBtn} size={20} />
          )

        }}
        name="Add"
        component={DiabetesCare} />

      <Tab.Screen
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused}) => (
            <Icon name="shopping-bag" style={focused ? styles.focused : styles.unfocused } size={20} />
          )

        }}
        name="Cart"
        component={Cart} 
        />

      <Tab.Screen
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused}) => (
            <Icon name="user" style={focused ? styles.focused : styles.unfocused } size={20} />
          )

        }}
        name="Account"
        component={Account} />


    </Tab.Navigator>


  )
}
const screenOptions = {
  tabBarStyle: {
    backgroundColor: "red",
    height: "100"
  }
}
const styles = StyleSheet.create({
  focused: {
    color: "#4157FF"
  },
  unfocused: {
    color:"rgba(9, 15, 71, 0.45)"
  },
  addnewBtn: {
    padding:11,
    color: "#fff",
    borderRadius: 6,
    backgroundColor: "#4157ff"
  }

})
export default Tabs;
