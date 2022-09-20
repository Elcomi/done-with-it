import React from "react";
import { StyleSheet, Image, View, TouchableHighlight } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { AppIcon } from "../components/AppIcon";
import { AppText } from "../components/appText";
import colors from "../config/colors";

export const ListItem = ({
  title,
  IconComponent,
  subTitle,
  image,
  onPress,
  numberOfLines,
  chevron,
  renderRightActions
}) => {
  return (
    // <Swipeable renderRightActions={renderRightActions}>
    <TouchableHighlight underlayColor={colors.medium} onPress={onPress}>
      <View style={styles.container}>
        {IconComponent}
        {image && <Image style={styles.image} source={image} />}
        <View style={styles.titlesContainer}>
          <AppText numberOfLines={1} style={styles.title}>
            {title}
          </AppText>
          {subTitle && (
            <AppText numberOfLines={numberOfLines} style={styles.subTitle}>
              {subTitle}
            </AppText>
          )}
        </View>
        {chevron && <AppIcon name='chevron-right' />}
      </View>
    </TouchableHighlight>
    // </Swipeable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 11,
    backgroundColor: colors.white
  },
  image: {
    width: 60,
    borderRadius: 30,
    height: 60
  },
  titlesContainer: {
    paddingHorizontal: 15,
    flex: 1,
    justifyContent: "center"
  },
  title: {
    fontWeight: "bold"
  },
  subTitle: {
    color: colors.medium
  }
});
