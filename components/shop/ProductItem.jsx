import React from "react";
import { View,StyleSheet, Text, Image, Button, TouchableOpacity, TouchableNativeFeedback, Platform } from "react-native";
import Colors from "../../constants/colors";


const ProductItem = props => {

  let TouchableComponent = TouchableOpacity;
  if(Platform.OS === "android" && Platform.Version >= 21) {
    TouchableComponent = TouchableNativeFeedback;
  }

  return(
      <View style={styles.product}>
        <View style={styles.touchable}>
          <TouchableComponent onPress={props.onViewDetail}>
            <View>
              <View style={styles.imageContainer}>
                <Image style={styles.image} source={{uri: props.image}} />
              </View>
              <View style={styles.details}>
                <Text style={styles.title}>{props.title}</Text>
                <Text style={styles.price}>${props.price.toFixed(2)}</Text>
              </View>
              <View style={styles.action}>
                <Button color={Colors.primaryColor} title="View Details" onPress={props.onViewDetail} />
                <Button color={Colors.primaryColor} title="Add To Cart" onPress={props.onAddToCart} />
              </View>
            </View>
          </TouchableComponent>
        </View>
      </View>
    
  );
};

const styles = StyleSheet.create({
  product: {
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "white",
    height: 300,
    margin: 20,
  },
  touchable: {
    borderRadius: 10,
    overflow: "hidden"
  },
  imageContainer: {
    width: "100%",
    height: "60%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: "hidden"
  },
  image: {
    width: "100%",
    height: "100%"
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 18,
    marginVertical: 2
  },
  price: {
    fontFamily: "open-sans",
    fontSize: 18,
    color: "#888"
  },
  action: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "25%",
    paddingHorizontal: 20,
    marginVertical: 2 
  },
  details: {
    alignItems: "center",
    height: "15%",
    padding: 10
  }
});

export default ProductItem;