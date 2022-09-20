import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import { AppText } from "../components/appText";
import colors from "../config/colors";

export const AppButton = ({ name, onPress, color = "#fc5c65", style }) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[color] }, style]}
      onPress={onPress}>
      <AppText style={{ color: colors.white, fontWeight: "bold" }}>
        {name}
      </AppText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    borderRadius: 45,
    padding: 10,
    marginBottom: 10
  }
});
