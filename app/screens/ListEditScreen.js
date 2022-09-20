import React from "react";
import * as Yup from "yup";

// import { useLocation } from "../hooks/useLocation";

import {
  Form,
  FormPicker,
  FormField,
  FormSubmitButton,
  FormImagePicker
} from "../components/form/index";

import { AppSafeArea } from "../components/AppSafeArea";
import listingsApi from "../api/listings";
import { progress } from "../components/progress";

const Categories = [
  {
    backgroundColor: "#fc5c65",
    icon: "floor-lamp",
    label: "Furniture",
    value: 1
  },
  {
    backgroundColor: "#fd9644",
    icon: "car",
    label: "Cars",
    value: 2
  },
  {
    backgroundColor: "#fed330",
    icon: "camera",
    label: "Cameras",
    value: 3
  },
  {
    backgroundColor: "#26de81",
    icon: "cards",
    label: "Games",
    value: 4
  },
  {
    backgroundColor: "#2bcbba",
    icon: "shoe-heel",
    label: "Clothing",
    value: 5
  },
  {
    backgroundColor: "#45aaf2",
    icon: "basketball",
    label: "Sports",
    value: 6
  },
  {
    backgroundColor: "#4b7bec",
    icon: "headphones",
    label: "Movies & Music",
    value: 7
  },
  {
    backgroundColor: "#a55eea",
    icon: "book-open-variant",
    label: "Books",
    value: 8
  },
  {
    backgroundColor: "#778ca3",
    icon: "application",
    label: "Other",
    value: 9
  }
];

const ListEditSchema = Yup.object().shape({
  images: Yup.array().min(1),
  title: Yup.string()
    .label("Title")
    .required()
    .min(2, "Title Too Short!"),
  price: Yup.number()
    .label("Price")
    .min(1)
    .max(10000)
    .required(),
  description: Yup.string().label("Description"),
  category: Yup.object()
    .label("Category")
    .nullable()
});

export const ListEditScreen = () => {
  const [progress, setProgress] = useState(0)

  const handlSubmit = (listings) =>{
    setLoading(true);

    const response = await listingsApi.postListings(listings) 
    setLoading(false);
   progress= setProgress()

    if (!response.ok)  setError(true)

  }
  return (
    <AppSafeArea>
      <Form
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
          images: []
        }}
        validationSchema={ListEditSchema}
        onSubmit={handlSubmit}>
        <FormImagePicker name='images' />
        <FormField maxLength={255} name='title' placeholder='Title' />
        <FormField
          keyboardType='numeric'
          maxLength={8}
          name='price'
          placeholder='Price'
          width='60%'
        />
        <FormPicker items={Categories} name='category' />
        <FormField
          maxLength={255}
          multiline
          name='description'
          placeholder='Description'
        />

        <FormSubmitButton name='Post' color='primary' />
      </Form>
    </AppSafeArea>
  );
};
