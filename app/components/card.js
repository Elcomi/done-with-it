import React from "react";
import {
  Image,
  View,
  StyleSheet,
  TouchableWithoutFeedback
} from "react-native";

import colors from "../config/colors";
import { AppText } from "../components/appText";

export const Card = ({ title, subTitle, image, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Image style={styles.image} source={image} />
        <View style={styles.titlesContainer}>
          <AppText style={styles.title}> {title}</AppText>
          <AppText style={styles.subTitle}>{subTitle}</AppText>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
    borderRadius: 20,
    marginBottom: 20,
    backgroundColor: colors.white
  },
  image: {
    width: "100%",
    height: 250
  },
  titlesContainer: {
    padding: 20
  },
  title: {
    marginBottom: 7,
    textTransform: "capitalize"
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold"
  }
});
