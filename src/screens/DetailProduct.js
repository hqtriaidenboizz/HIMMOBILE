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
import Banner from "../components/Banner";
const { width } = Dimensions.get('screen');
const DetailProduct= ({route}) =>{
  // console.log(products);
  const products =route.params;
  return (
    <View style={styles.container}>
      <Text style={{
        color: "#090F47",
        fontSize:22,
        fontWeight: "bold"
      }}>Sugar Free Gold Low Calories</Text>
      <Text style={{
        color: "rgba(9, 15, 71, 0.45)",
        fontSize:14,
      }}>Etiam mollis metus non purus </Text>
        <View style={{
          width:"100%",
          height: 140,
          backgroundColor:"#F8F8F8",
          borderRadius:10,
          display:"flex",
          justifyContent:"center",
          alignItems:"center",
        }}>
          <Image style={{
            width: width-98-98-50,
            height: "100%",
            
          }}
           source={products.url} />
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
    flex: 1,
    backgroundColor:"#fff"
  },
})
export default DetailProduct;