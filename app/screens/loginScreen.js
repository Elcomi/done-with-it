import React from "react";
import { StyleSheet, Image, View } from "react-native";
import * as Yup from "yup";

import { Form, FormField, FormSubmitButton } from "../components/form";

import { AppSafeArea } from "../components/AppSafeArea";

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email()
    .label("Email")
    .required("This Field is Required"),
  password: Yup.string()
    .min(4, "Password Too Short!")
    .label("Password")
    .required("This Field is Required")
});

export const LoginScreen = () => {
  return (
    <AppSafeArea>
      <Image
        source={require("../../assets/logo-red.png")}
        style={styles.image}
      />
      <Form
        initialValues={{
          email: "",
          password: ""
        }}
        validationSchema={LoginSchema}
        onSubmit={values => console.log(values)}>
        <View style={{ flex: 1 }}>
          <FormField name='email' iconName='email' />
          <FormField
            name='password'
            iconName='lock'
            placeholder='Password'
            secureTextEntry
          />

          <FormSubmitButton name='Login' color='primary' />
        </View>
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
