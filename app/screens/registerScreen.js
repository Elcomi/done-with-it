import React from "react";
import { StyleSheet, Image, View } from "react-native";
import * as Yup from "yup";

import { Form, FormField, FormSubmitButton } from "../components/form";

import { AppSafeArea } from "../components/AppSafeArea";

const RegisterSchema = Yup.object().shape({
  name: Yup.string()
    .label("Email")
    .required("This Field is Required")
    .min(2, "Name Too Short!"),
  email: Yup.string()
    .email()
    .label("Email")
    .required("This Field is Required"),
  password: Yup.string()
    .label("Password")

    .min(4, "Password Too Short!")
    .required("This Field is Required")
});

export const RegisterScreen = () => {
  return (
    <AppSafeArea>
      <Image
        source={require("../../assets/logo-red.png")}
        style={styles.image}
      />
      <Form
        initialValues={{
          name: "",
          email: "",
          password: ""
        }}
        validationSchema={RegisterSchema}
        onSubmit={values => console.log(values)}>
        <FormField name='name' iconName='account' placeholder='Name' />
        <FormField name='email' iconName='email' />
        <FormField
          name='password'
          iconName='lock'
          placeholder='Password'
          secureTextEntry
        />
        <FormSubmitButton name='Register' color='primary' />
      </Form>
    </AppSafeArea>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    alignSelf: "center",
    marginVertical: 50
  }
});
