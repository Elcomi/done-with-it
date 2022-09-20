import React, { useState } from "react";
import {
  StyleSheet,
  TouchableWithoutFeedback,
  Modal,
  View,
  FlatList
} from "react-native";

import { AppIcon } from "../components/AppIcon";
import colors from "../config/colors";
import { AppButton } from "./appButton";
import PickerItem from "./PickerItem";
import { AppSeparator } from "./AppSeparator";
import { AppText } from "./appText";

export const AppPicker = ({
  items,
  width = "100%",
  placeholder,
  PickerItemComponent = PickerItem,
  numberOfColumns = 1,
  selectedItem,
  onSelectItem,
  ItemSeparatorComponent = () => <AppSeparator />
}) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <TouchableWithoutFeedback onPress={() => setIsVisible(true)}>
      <View>
        <View style={[styles.container, { width }]}>
          <AppIcon name='dialpad' iconColor={colors.medium} />
          <View style={{ flex: 1, alignSelf: "center" }}>
            {selectedItem ? (
              <AppText style={{ color: colors.black, fontWeight: "bold" }}>
                {selectedItem.label}
              </AppText>
            ) : (
              <AppText style={{ color: colors.medium }}>{placeholder}</AppText>
            )}
          </View>

          <AppIcon name='chevron-down' />
        </View>
        <Modal animationType='slide' visible={isVisible}>
          <View style={{ marginVertical: 15 }}>
            <AppButton
              style={{ alignSelf: "center", width: 150 }}
              name='close'
              color='secondary'
              onPress={() => setIsVisible(false)}
            />

            <FlatList
              data={items}
              numColumns={numberOfColumns}
              keyExtractor={category => category.value}
              renderItem={({ item }) => (
                <PickerItemComponent
                  item={item}
                  onPress={() => {
                    onSelectItem(item);
                    setIsVisible(false);
                  }}
                />
              )}
              ItemSeparatorComponent={ItemSeparatorComponent}
            />
          </View>
        </Modal>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    borderRadius: 15,
    marginBottom: 15,
    backgroundColor: colors.light,
    flexDirection: "row",
    overflow: "hidden"
  }
});
