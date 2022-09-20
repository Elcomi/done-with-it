import React, { useRef } from "react";
import { StyleSheet, View, ScrollView } from "react-native";

import { AppImagePicker } from "./ImagePicker";

export const ImagesList = ({ images = [], deleteImage, addImage }) => {
  const scrollView = useRef();
  return (
    <View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        ref={scrollView}
        onContentSizeChange={() => scrollView.current.scrollToEnd()}
        horizontal>
        {images.map(uri => (
          <View key={uri} style={{ marginRight: 10 }}>
            <AppImagePicker
              imageUri={uri}
              onChangeImage={() => deleteImage(uri)}
            />
          </View>
        ))}
        <AppImagePicker onChangeImage={addImage} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});
