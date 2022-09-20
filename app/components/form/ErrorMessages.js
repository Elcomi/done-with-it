import React from "react";
import { AppText } from "../appText";
import { useFormikContext } from "formik";
import colors from "../../config/colors";

export default ErrorMessages = ({ name }) => {
  const { touched, errors } = useFormikContext();

  return errors[name] && touched[name] ? (
    <AppText style={{ color: colors.danger, paddingBottom: 15 }}>
      {errors[name]}
    </AppText>
  ) : null;
};
