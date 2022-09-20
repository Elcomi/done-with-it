import React from "react";
import { View } from "react-native";
import { useFormikContext } from "formik";

import { AppTextInput } from "../AppTextInput";
import ErrorMessages from "./ErrorMessages";

export default FormField = ({ name, ...otherProps }) => {
  const { handleChange, values } = useFormikContext();
  return (
    <View {...otherProps}>
      <AppTextInput
        onChangeText={handleChange(name)}
        value={values[name]}
        autoCapitalize='none'
        autoCorrect={false}
        {...otherProps}
      />

      <ErrorMessages name={name} />
    </View>
  );
};
