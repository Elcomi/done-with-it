import React from "react";
import { StyleSheet, FlatList, View } from "react-native";

import { ListItem } from "../components/listItem";
import { AppIcon } from "../components/AppIcon";
import { AppSafeArea } from "../components/AppSafeArea";
import colors from "../../app/config/colors";
import { AppSeparator } from "../components/AppSeparator";

const AccountListingData = [
  {
    id: 1,
    title: "My Listing",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary
    },
    navigation: "Listings"
  },
  {
    id: 2,
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary
    },
    navigation: "Messages"
  }
];

export const MyAccountScreen = ({ navigation }) => {
  return (
    <AppSafeArea>
      <View style={styles.container}>
        <ListItem
          title='Ahmed Esmail'
          subTitle='ahmedesmail1431999@gmail.com'
          image={require("../../assets/mosh.jpg")}
          numberOfLines={1}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={AccountListingData}
          keyExtractor={list => list.id.toString()}
          renderItem={({ item }) => (
            <ListItem
              onPress={() => navigation.navigate(item.navigation)}
              title={item.title}
              chevron
              IconComponent={
                <AppIcon
                  iconColor={colors.white}
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
          ItemSeparatorComponent={AppSeparator}
        />
      </View>
      <ListItem
        title='Log Out'
        IconComponent={
          <AppIcon
            iconColor={colors.white}
            name='logout'
            backgroundColor='#ffe66d'
          />
        }
      />
    </AppSafeArea>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20
  }
});
