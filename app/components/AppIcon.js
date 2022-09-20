import React from "react";
import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

export const AppIcon = ({
  name,
  size = 50,
  iconColor = colors.medium,
  backgroundColor
}) => {
  return (
    <View
      style={[
        {
          width: size,
          height: size,
          borderRadius: size / 2,
          backgroundColor,
          justifyContent: "center",
          alignItems: "center"
        }
      ]}>
      <MaterialCommunityIcons name={name} size={size / 2} color={iconColor} />
    </View>
  );
};
