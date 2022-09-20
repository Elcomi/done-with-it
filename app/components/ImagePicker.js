import React, { useEffect } from "react";
import {
  StyleSheet,
  View,
  Image,
  Alert,
  TouchableWithoutFeedback
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

export const AppImagePicker = ({ imageUri, onChangeImage }) => {
  useEffect(() => {
    cameraPermissions();
  }, []);
  const cameraPermissions = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted) {
      alert("need access to gallery for this app to work");
    }
  };

  const pickImage = async () => {
    const { uri, cancelled } = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.5
    });

    console.log(uri);

    if (!cancelled) {
      onChangeImage(uri);
    }
  };

  const handlePress = () => {
    if (!imageUri) {
      pickImage();
    } else
      Alert.alert("Delete Image", "Are you sure to delete this image ?", [
        {
          text: "Cancel"
        },
        { text: "Delete", onPress: () => onChangeImage(null) }
      ]);
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {imageUri ? (
          <Image
            source={{ uri: imageUri }}
            style={{ width: "100%", height: "100%" }}
          />
        ) : (
          <MaterialCommunityIcons
            name='camera'
            size={40}
            color={colors.medium}
          />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    borderRadius: 30,
    backgroundColor: colors.light,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 15,
    overflow: "hidden"
  }
});
