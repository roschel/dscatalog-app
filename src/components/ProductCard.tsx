import React from "react";
import {
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  Image,
  View,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import { text, theme } from "../styles";

interface ProductProps {
  id: number;
  name: string;
  imgUrl: ImageSourcePropType;
  price: number;
}

const ProductCard: React.FC<ProductProps> = ({ id, name, imgUrl, price }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={theme.productCard}
      onPress={() => navigation.navigate("ProductDetails", { id })}
    >
      <Image source={{ uri: imgUrl }} style={theme.productImg} />
      <View style={theme.productDescription}>
        <Text style={text.productName}>{name}</Text>
        <View style={theme.priceContainer}>
          <Text style={text.currency}>R$</Text>
          <Text style={text.productPrice}>{price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;
