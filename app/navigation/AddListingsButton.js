import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

export const AddListingsButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <MaterialCommunityIcons name='plus' color={colors.primary} size={40} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 75,
    height: 75,
    borderRadius: 25,
    borderColor: colors.primary,
    borderWidth: 15,
    justifyContent: "center",
    bottom: 30,
    alignItems: "center",
    backgroundColor: colors.white
  }
});
