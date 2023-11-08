import { StyleSheet } from "react-native";
import { colors } from "../../../commons/styles";

export const captureButtonStyle = StyleSheet.create<any>({
  position: "absolute",
  bottom: 0,
  marginLeft: "50%",
  transform: [{ translateX: -50 }],
});
export const modalViewStyle = (windowSizes: any) => {
  return StyleSheet.create<any>({
    margin: 0,
    padding: 2,
    height: '100%',
    width: '100%',
    backgroundColor: colors.razorPurple,
    borderColor: colors.razorPurple,
    borderWidth: 1,
    borderStyle: 'solid',
  });
};
export const closeCrossStyle = StyleSheet.create<any>({
  position: "absolute",
  right: 20,
  top: -20,
});
export const imagePreviewStyle = StyleSheet.create<any>({
  height: '100%',
  width: '100%',
});
