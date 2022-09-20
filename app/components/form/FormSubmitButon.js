import React from "react";
import { AppButton } from "../../components/appButton";

import { useFormikContext } from "formik";

export default FormSubmitButon = ({ name, color }) => {
  const { handleSubmit } = useFormikContext();

  return <AppButton name={name} color={color} onPress={handleSubmit} />;
};
