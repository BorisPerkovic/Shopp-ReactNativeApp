import { Platform } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from 'react-navigation';

import Colors from "../constants/colors";
import ProductsOverviewScreen from "../screens/shop/ProductOverviewScreen";
import ProductDetailScreen from "../screens/shop/ProductDetailScreen";

const ProductsNavigator = createStackNavigator({
  ProductOverview: ProductsOverviewScreen,
  ProductDetail: ProductDetailScreen
}, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Platform.OS === "android" ? Colors.primaryColor : ""
    },
    headerTitleStyle: {
      fontFamily: "open-sans-bold"
    },
    headerBackTitleStyle: {
      fontFamily: "open-sans-bold"
    },
    headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor
  }
});

export default createAppContainer(ProductsNavigator);