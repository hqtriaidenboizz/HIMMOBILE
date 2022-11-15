import React from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
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
import Home from '../screens/Home';
import DetailProduct from '../screens/DetailProduct';
import Icon from 'react-native-vector-icons/Feather';
import AddNew from '../screens/AddNew';
import DiabetesCare from '../screens/DiabetesCare';

const Stacks = () => {
  return (

    <Stack.Navigator >
      <Stack.Screen 
      options={{
        headerShown:false       
      }} name="index" component={DiabetesCare} />
      <Stack.Screen
      options={{
        
        headerStyle: {
          height:30,
          backgroundColor: '#fff',
        },
        headerTitle:"",
        headerShadowVisible:false,
        headerRight:(props) => <View style
        ={{display:"flex",
        flexDirection:"row",  
        marginRight:25}}>
           <Icon  style={{marginLeft:10}} name='bell' color="#090F47" size={20}/>
           <Icon style={{marginLeft:10}} name='shopping-bag' color="#090F47" size={20}/>

        </View>,
        
      }}
        name="DetailProduct" component={DetailProduct} />

    </Stack.Navigator>


  )
}

export default Stacks;
const styles = StyleSheet.create({
  container: {

  },
})
