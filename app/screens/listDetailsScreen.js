import React from "react";
import { View } from "react-native";

import { Card } from "../components/card";
import { ListItem } from "../components/listItem";

export const ListDetailsScreen = ({ route, navigation }) => {
  const item = route.params;

  return (
    <View>
      <Card
        title={item.title}
        subTitle={"$" + item.price}
        image={item.image}
        onPress={() => navigation.navigate("ViewImage", item.image)}
      />
      <ListItem
        icon={require("../../assets/mosh.jpg")}
        title='Som3a'
        subTitle='5 Listing'
      />
    </View>
  );
};
