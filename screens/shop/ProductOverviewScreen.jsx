import React from "react";
import { FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import CustomHeaderButton from "../../components/UI/CustomHeaderButton";

import ProductItem from "../../components/shop/ProductItem";
import * as cartActions from "../../store/actions/cart";

const ProductOverviewScreen = props => {

  const products = useSelector(state => state.products.availableProducts);

  const dispatch = useDispatch();

  return(
    <FlatList data={products} keyExtractor={item => item.id} 
    renderItem={itemData => 
    <ProductItem 
        image={itemData.item.imageUrl} 
        title={itemData.item.title} 
        price={itemData.item.price} 
        onViewDetail={() => {
          props.navigation.navigate("ProductDetail", { productId: itemData.item.id, productTitle: itemData.item.title});
        }}
          onAddToCart={() => {
            dispatch(cartActions.addToCart(itemData.item));
          }} 
      /> }
    />
  );
};

ProductOverviewScreen.navigationOptions = navData => {
  return {
    headerTitle: "All Products",
    headerRight: () => (
      <CustomHeaderButton onAddToCart={() => {navData.navigation.navigate({routeName: "Cart"})}} />
    )
  }
   
};

export default ProductOverviewScreen;
