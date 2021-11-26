import React from 'react';
import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

//import Colors from "../../constants/colors";

const CustomHeaderButton = props => {
  return (
    <Pressable style={styles.container} onPress={props.onAddToCart}>
      <Ionicons name="cart" size={28} color="white" />
    </Pressable>
  );
};

export default CustomHeaderButton;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20
  },
});
