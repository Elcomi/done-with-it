import React from "react";
import { Modal } from "react-native";
import * as Progress from "react-native-progress";

export const progress = ({ visible }) => {
  return (
    <Modal animationType='slide' visible={visible}>
      <Progress.Bar progress={progress} width={200} />
    </Modal>
  );
};
