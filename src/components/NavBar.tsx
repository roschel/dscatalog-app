import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import { Image, Text, View, TouchableOpacity } from "react-native";
import { TouchableNativeFeedback } from "react-native-gesture-handler";
import menu from "../assets/menu.png";
import { nav } from "../styles";

const NavBar: React.FC = () => {
  const [show, setShow] = useState(false);
  const navigation = useNavigation();
  const route = useRoute();

  function navegar(path: any) {
    if (path) {
      setShow(false);
      navigation.navigate(path);
    }
    setShow(false);
  }

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={nav.drawer}
      onPress={() => setShow(!show)}
    >
      <Image source={menu} />
      {show ? (
        <View style={nav.options}>
          <TouchableNativeFeedback
            style={nav.option}
            onPress={() => navegar("Home")}
          >
            <Text
              style={[
                nav.textOption,
                route.name === "Home" ? nav.textActive : null,
              ]}
            >
              Home
            </Text>
          </TouchableNativeFeedback>

          <TouchableNativeFeedback
            style={nav.option}
            onPress={() => navegar("Catalog")}
          >
            <Text
              style={[
                nav.textOption,
                route.name === "Catalog" ? nav.textActive : null,
              ]}
            >
              Catalog
            </Text>
          </TouchableNativeFeedback>

          <TouchableNativeFeedback
            style={nav.option}
            onPress={() => navegar("Admin")}
          >
            <Text
              style={[
                nav.textOption,
                route.name === "Admin" ? nav.textActive : null,
              ]}
            >
              Admin
            </Text>
          </TouchableNativeFeedback>
        </View>
      ) : null}
    </TouchableOpacity>
  );
};

export default NavBar;
