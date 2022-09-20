import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

import { AppIcon } from "../components/AppIcon";
import colors from "../config/colors";

export const AppTextInput = ({
  width = "100%",
  style,
  iconName,
  iconColor,
  ...otherProps
}) => {
  return (
    <View style={[styles.container, style, { width }]}>
      {iconName && <AppIcon name={iconName} iconColor={iconColor} />}
      <TextInput style={{ margin: 10 }} placeholder='Email' {...otherProps} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    borderRadius: 15,
    backgroundColor: colors.light,
    flexDirection: "row",
    overflow: "hidden",
    marginBottom: 15
  }
});
