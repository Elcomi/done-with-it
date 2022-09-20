import React from "react";
import { TouchableOpacity } from "react-native";
import { AppIcon } from "../components/AppIcon";
import { AppText } from "./appText";
import colors from "../config/colors";

export const PickerCategory = ({ item, onPress }) => {
  return (
    <TouchableOpacity
      style={{ padding: 25, maxWidth: "40%" }}
      onPress={onPress}>
      <AppIcon
        name={item.icon}
        backgroundColor={item.backgroundColor}
        iconColor={colors.white}
        size={80}
      />
      <AppText
        style={{ textAlign: "center", paddingTop: 10, color: colors.medium }}>
        {item.label}
      </AppText>
    </TouchableOpacity>
  );
};
