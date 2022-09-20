import React from "react";
import { StyleSheet, View, Image } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

export const ViewImageScreen = ({ route }) => {
  const image = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.cancel}>
        <MaterialCommunityIcons name='close-thick' size={30} color='white' />
      </View>
      <View style={styles.delete}>
        <MaterialCommunityIcons name='delete' size={30} color='white' />
      </View>
      <Image resizeMode='contain' style={styles.image} source={image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black"
  },

  cancel: {
    position: "absolute",
    top: 60,
    right: 30
  },
  delete: {
    position: "absolute",
    top: 60,
    left: 30
  },
  image: {
    flex: 1,
    width: "100%"
  }
});
