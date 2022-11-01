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
// import Icon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Feather';
import Banner from "../components/Banner";
import DiabeticDiet from "../containers/diabeticDiet";
import Products from "../containers/products";

function DiabetesCare() {
  return (
      <View style={styles.wrapper}>

<TouchableOpacity style={styles.backButon}>
  <Icon style={styles.arrowbutton} name="arrow-left" size={25} color="#000" />
  <Text style={styles.buttonName}>Diabetes Care</Text>
</TouchableOpacity>

<ScrollView
showsVerticalScrollIndicator={false}
showsHorizontalScrollIndicator={false}>
  <Banner
    imageUri={require('../assets/images/banner.png')}
    title="Save extra on every order"
    paragraph="Etiam mollis metus non faucibus sollicitudin. "
  />
<View>
  <DiabeticDiet></DiabeticDiet>
</View>
<View>
  <Products></Products>
</View>
</ScrollView>

</View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 25,
    backgroundColor:"#ffff"
  },

  backButon: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    // backgroundColor: "red"
  },

  arrowbutton: {
  },

  buttonName: {
    fontSize: 16,
    color: "#090F47",
    fontWeight: "bold",
    marginLeft: 16
  }
});
export default DiabetesCare;