import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { ListEditScreen } from "../screens/ListEditScreen";
import { FeedNavigator } from "./FeedNavigator";
import { AccountNavigator } from "./AccountNavigator";
import { AddListingsButton } from "./AddListingsButton";

const Tab = createBottomTabNavigator();

export const AppNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false
      }}>
      <Tab.Screen
        name='Home'
        component={FeedNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name='home' color={color} size={size} />
          )
        }}
      />
      <Tab.Screen
        name='Listings Edit'
        component={ListEditScreen}
        options={({ navigation }) => ({
          tabBarButton: () => (
            <AddListingsButton
              onPress={() => navigation.navigate("Listings Edit")}
            />
          )
        })}
      />
      <Tab.Screen
        name='My Account'
        component={AccountNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name='account' color={color} size={size} />
          )
        }}
      />
    </Tab.Navigator>
  );
};
