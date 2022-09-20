import React from "react";
import { View } from "react-native";
import { useFormikContext } from "formik";

import { AppPicker } from "../AppPicker";
import ErrorMessages from "./ErrorMessages";
import { PickerCategory } from "../../components/PickerCategory";

export default FormPicker = ({ items, name }) => {
  const { setFieldValue, values } = useFormikContext();
  return (
    <View>
      <AppPicker
        items={items}
        PickerItemComponent={PickerCategory}
        onSelectItem={item => setFieldValue(name, item)}
        numberOfColumns={3}
        selectedItem={values[name]}
        ItemSeparatorComponent={null}
        placeholder='Choose from categories'
        width='80%'
      />
      <ErrorMessages name={name} />
    </View>
  );
};
