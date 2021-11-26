import React from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import Colors from "../../constants/colors";
import CustomCartItem from "../../components/shop/CustomCartItem";
import * as cartActions from "../../store/actions/cart"; 

const CartScreen = props => {
  const cartTotalAmoount = useSelector(state => state.cart.totalAmount);
  const cartItems = useSelector(state => {
    const transforfemItems = [];
    for(const key in state.cart.items) {
      transforfemItems.push({
        productId: key,
        productsTitle: state.cart.items[key].prodTitle,
        productsPrice: state.cart.items[key].prodPrice,
        quantity: state.cart.items[key].quantity,
        sum: state.cart.items[key].sum
      });
    }
    return transforfemItems;
  });

  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <View style={styles.summary}>
        <Text>
          <Text style={styles.summaryText}>Total:</Text> <Text style={styles.ammount}>${cartTotalAmoount.toFixed(2)}</Text>
        </Text>
        <Button title="Order Now" color={Colors.primaryColor} disabled={cartItems.length === 0} />
      </View>
      <View>
        <FlatList 
          data={cartItems}
          renderItem={itemData => <CustomCartItem quantity={itemData.item.quantity}  title={itemData.item.productsTitle} amount={itemData.item.sum} onRemove={() => {
            dispatch(cartActions.removeFromCart(itemData.item.productId));
          }} /> }
          keyExtractor={item => item.productId} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,

  },
  summary: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
    padding: 10,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "white",
  },
  summaryText: {
    fontFamily: "open-sans-bold",
    fontSize: 18
  },
  ammount: {
    color: Colors.accentColor
  }
});

export default CartScreen;
