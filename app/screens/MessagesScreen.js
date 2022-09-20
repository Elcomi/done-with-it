import React, { useState } from "react";
import { View, FlatList } from "react-native";

import { ListItem } from "../components/listItem";
import { AppSafeArea } from "../components/AppSafeArea";
import { AppSeparator } from "../components/AppSeparator";

const MessagestListingData = [
  {
    title: "Roka",
    subTitle: "15 messages",
    image: require("../../assets/mosh.jpg")
  },
  {
    title: "ahmed elsayed salama elshazly",
    subTitle:
      "2 messages about some  bugs delete function still not implemented with renderRightActions from swipable component",
    image: require("../../assets/mosh.jpg")
  },
  {
    title: "da3dour",
    subTitle: "5 messages",
    image: require("../../assets/mosh.jpg")
  },
  {
    title: "magdy",
    subTitle: "1 message",
    image: require("../../assets/mosh.jpg")
  }
];

export const MessagesScreen = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [messages, setMessages] = useState(MessagestListingData);

  // renderRightAction = (text, color, x, progress, id) => {
  //   const trans = progress.interpolate({
  //     inputRange: [0, 1],
  //     outputRange: [x, 0]
  //   });
  // };

  // renderRightActions = (progress, id) => (
  //   <RightButtonsHandler>
  //     {renderRightAction("pencil", "#B4C1CB", 160, progress, id)}
  //     {renderRightAction("trashcan", "#F85A5A", 80, progress, id)}
  //   </RightButtonsHandler>
  // );

  //  delete function still not implemented with renderRightActions from swipable component
  return (
    <AppSafeArea>
      <FlatList
        data={messages}
        keyExtractor={message => message.title}
        renderItem={({ item }) => (
          <ListItem
            numberOfLines={2}
            chevron
            title={item.title}
            subTitle={item.subTitle}
            image={item.image}
            onPress={() => console.log()}
            renderRightActions={() => (
              <View
                style={{
                  backgroundColor: "red",
                  width: 50
                }}></View>
            )}
          />
        )}
        ItemSeparatorComponent={AppSeparator}
        refreshing={refreshing}
        onRefresh={() =>
          setMessages([
            {
              title: "Roka",
              subTitle: "15 messages",
              image: require("../../assets/mosh.jpg")
            }
          ])
        }
      />
    </AppSafeArea>
  );
};
