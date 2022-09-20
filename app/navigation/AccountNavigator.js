import React from "react";
import {
  createStackNavigator,
  TransitionPresets
} from "@react-navigation/stack";

import { MyAccountScreen } from "../screens/MyAccountScreen";
import { ListingsScreen } from "../screens/ListingsScreen";
import { MessagesScreen } from "../screens/MessagesScreen";

const Stack = createStackNavigator();

export const AccountNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        ...TransitionPresets.SlideFromRightIOS
      }}>
      <Stack.Screen
        name='Account'
        component={MyAccountScreen}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen name='Listings' component={ListingsScreen} />
      <Stack.Screen name='Messages' component={MessagesScreen} />
    </Stack.Navigator>
  );
};
