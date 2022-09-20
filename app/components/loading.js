import LottieView from "lottie-react-native";

export const LoadingAnimation = () => (
  <LottieView
    autoPlay
    loop
    source={require("../../assets/animation/loading.json")}
  />
);
