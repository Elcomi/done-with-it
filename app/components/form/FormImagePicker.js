import React, { useState } from "react";
import { useFormikContext } from "formik";
import { ImagesList } from "../ImagesList";

export default FormImagePicker = ({ name }) => {
  const { setFieldValue, values } = useFormikContext();
  const imagesUri = values[name];

  const handleDelete = uri =>
    setFieldValue(name, imagesUri.filter(imageUri => imageUri !== uri));

  const handleAdd = uri => setFieldValue(name, [...imagesUri, uri]);

  return (
    <>
      <ImagesList
        images={imagesUri}
        deleteImage={handleDelete}
        addImage={handleAdd}
      />
      <ErrorMessages name={name} />
    </>
  );
};
