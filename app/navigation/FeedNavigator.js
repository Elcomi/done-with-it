import React from "react";
import {
  createStackNavigator,
  TransitionPresets
} from "@react-navigation/stack";

import { ListingsScreen } from "../screens/ListingsScreen";
import { ListDetailsScreen } from "../screens/listDetailsScreen";
import { ViewImageScreen } from "../screens/viewImageScreen";

const Stack = createStackNavigator();

export const FeedNavigator = ({ navigation, routeName }) => {
  const hide = routeName != "Profile";

  //   React.useLayoutEffect(() => {
  //     const routeName = getFocusedRouteNameFromRoute(route);
  //     if (routeName == "ViewImage") {
  //       navigation.setOptions({ tabBarVisible: false });
  //     } else {
  //       navigation.setOptions({ tabBarVisible: true });
  //     }
  //   }, [navigation, route]);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.ModalSlideFromBottomIOS
      }}>
      <Stack.Screen name='Listings' component={ListingsScreen} />
      <Stack.Screen name='ListDetails' component={ListDetailsScreen} />
      <Stack.Screen
        name='ViewImage'
        component={ViewImageScreen}
        options={{
          ...TransitionPresets.RevealFromBottomAndroid,
          tabBarStyle: { display: hide ? "none" : "flex" }
        }}
      />
    </Stack.Navigator>
  );
};
