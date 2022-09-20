import React, { useState, useEffect } from "react";
import { StyleSheet, FlatList } from "react-native";

import { Card } from "../components/card";
import { AppSafeArea } from "../components/AppSafeArea";
import { AppButton } from "../components/appButton";
import listingsApi from "../api/listings";
import useApi from "../hooks/useApi";
import { AppText } from "../components/appText";
import { LoadingAnimation } from "../components/loading";

const cardsListingData = [
  {
    title: "red jacket for sale",
    price: 100,
    image: require("../../assets/jacket.jpg")
  },
  {
    title: "couch in great condition",
    price: 1000,
    image: require("../../assets/couch.jpg")
  },
  {
    title: "red jackett for sale",
    price: 100,
    image: require("../../assets/jacket.jpg")
  },
  {
    title: "couch in greatt condition",
    price: 1000,
    image: require("../../assets/couch.jpg")
  }
];
export const ListingsScreen = ({ navigation }) => {
  const { request, data, error, loading } = useApi(listingsApi.getListings);

  useEffect(() => {
    request();
  }, []);
  return (
    <AppSafeArea style={styles.container}>
      {error && (
        <>
          <AppText>There Is An Error Happened When Retrieve Your Data</AppText>
          <AppButton name='Reload' onPress={() => request()} />
        </>
      )}

      {loading ? (
        <LoadingAnimation />
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data}
          renderItem={({ item }) => (
            <Card
              title={item.title}
              subTitle={"$" + item.price}
              // image={item.image}
              onPress={() => navigation.navigate("ListDetails", item)}
            />
          )}
          keyExtractor={item => item.id}
        />
      )}
    </AppSafeArea>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15
  }
});
