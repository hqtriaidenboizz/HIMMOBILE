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
import ProductType from "../components/productType";
import { data } from "../assets/consts/data";

function DiabeticDiet() {
  // console.log(data);
  return (
    <View style={styles.container}>
      <Text style={styles.catagory}>Diabetic Diet</Text>
      <View style={styles.listProduct} >
        <FlatList style={styles.containerProduct}
          data={data}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => <ProductType
            url={item.url}
            title={item.title} />
          }
          keyExtractor={item => item.id}
          
        />
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    marginTop: 24,
  },
  catagory: {
    fontSize: 16,
    color: "#090F47",
    fontWeight: "bold"
  },
  listProduct: {
    marginVertical: 15,
    position: 'relative',
    zIndex: 100000,
  },
  containerProduct: {
    // flex:1,
    display: 'flex',

    
    

  }
  
});
export default DiabeticDiet;