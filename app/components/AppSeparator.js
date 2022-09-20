import React from "react";
import { StyleSheet, View } from "react-native";
import colors from "../config/colors";

export const AppSeparator = () => {
  return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 1,
    backgroundColor: colors.light
  }
});
