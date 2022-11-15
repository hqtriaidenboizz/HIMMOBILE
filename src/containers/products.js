import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
const baseURL = "https://628d8c71a339dfef879c3fac.mockapi.io/Products";
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
import ProductItem from "../components/productItem";
import { data2 } from "../assets/consts/data";

const Products = () => {
  const [Data, setData] = useState([]);
  const getData = () => {
    axios.get(`${baseURL}`)
      .then((response) => {
        setData(response.data)
      })
  };
  useEffect(() => {
    getData()
    console.log(Data);
  }, [])
  return (
    <View style={styles.comtainer}>
      <Text style={styles.title}>All Products</Text>
      <View style={styles.prodcuts}>
        <FlatList
          columnWrapperStyle={{ justifyContent: 'space-between' }}
          data={Data}
          numColumns={2}
          renderItem={({ item }) => <ProductItem products={item}

          />} />
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  comtainer: {
    // marginVertical:15
  },
  title: {
    fontSize: 16,
    color: "#090F47",
    fontWeight: "bold"
  },
  prodcuts: {
    height: "auto",
    marginVertical: 25
  }

})
export default Products;