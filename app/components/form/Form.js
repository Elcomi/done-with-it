import React from "react";
import { Formik } from "formik";

export default Form = ({ children, ...otherProps }) => {
  return <Formik {...otherProps}>{() => <>{children}</>}</Formik>;
};
