import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import ThemeNavigation from "./ThemeNavigation";

import { AuthNavigator } from "./AuthNavigator";
import { AppNavigator } from "./AppNavigator";

export const Navigation = () => {
  return (
    <NavigationContainer theme={ThemeNavigation}>
      {/* <AuthNavigator /> */}
      <AppNavigator />
    </NavigationContainer>
  );
};
