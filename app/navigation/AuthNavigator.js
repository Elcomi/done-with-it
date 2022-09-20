import React from "react";
import {
  createStackNavigator,
  TransitionPresets
} from "@react-navigation/stack";

import { WelcomeScreen } from "../screens/welcomeScreen";
import { RegisterScreen } from "../screens/registerScreen";
import { LoginScreen } from "../screens/loginScreen";

const Stack = createStackNavigator();

export const AuthNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        ...TransitionPresets.RevealFromBottomAndroid
      }}>
      <Stack.Screen
        name='Welcome'
        component={WelcomeScreen}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen name='Register' component={RegisterScreen} />
      <Stack.Screen name='Login' component={LoginScreen} />
    </Stack.Navigator>
  );
};
