import React from "react";
import { StyleSheet, ImageBackground, View, Image, Text } from "react-native";

import { AppButton } from "../components/appButton";

export const WelcomeScreen = ({ navigation }) => {
  return (
    <>
      <ImageBackground
        style={styles.container}
        blurRadius={5}
        source={require("../../assets/background.jpg")}>
        <View style={styles.iconContainer}>
          <Image
            style={styles.icon}
            source={require("../../assets/logo-red.png")}
          />
          <Text style={styles.title}> Sell what you dont need </Text>
        </View>
        <View style={styles.buttonsContainer}>
          <AppButton
            name='Login'
            color='primary'
            style={styles.signIn}
            onPress={() => navigation.navigate("Login")}
          />
          <AppButton
            name='Register'
            color='secondary'
            style={styles.signUp}
            onPress={() => navigation.navigate("Register")}
          />
        </View>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end"
  },
  iconContainer: {
    position: "absolute",
    top: 100,
    left: 80,
    alignItems: "center"
  },
  icon: {
    width: 100,
    height: 100,
    marginBottom: 10
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textTransform: "capitalize"
  },
  buttonsContainer: {
    padding: 25
  },
  signIn: {
    width: "100%",
    height: 70
  },
  signUp: {
    width: "100%",
    height: 70
  }
});
