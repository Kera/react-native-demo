import { StyleSheet } from "react-native";
import { colors } from "../../../commons/styles";

const modalViewStyle = StyleSheet.create<any>({
    margin: 0,
    padding: 3,
    height: '100%',
    width: '100%',
    backgroundColor: colors.razorPurple,
  });

const captureButtonStyle = StyleSheet.create<any>({
  position: "absolute",
  bottom: 0,
  marginLeft: "50%",
  transform: [{ translateX: -50 }],
});
const closeCrossStyle = StyleSheet.create<any>({
  position: "absolute",
  right: 20,
  top: -20,
});
const imagePreviewStyle = StyleSheet.create<any>({
  height: '100%',
  width: '100%',
});
const buttonView = StyleSheet.create<any>({
  position: 'absolute',
  bottom: 0,
  width: '100%',
  padding: 12,
  flexDirection: 'row',
  justifyContent: 'space-evenly',
})
const buttonStyle = StyleSheet.create<any>({
  height: 40,
  backgroundColor: colors.black,
  borderColor: colors.razorPurple,
  borderWidth: 2,
  borderStyle: 'solid',
  borderRadius: 20,
  padding: 10,
  paddingLeft: 20,
  paddingRight: 20,
  minWidth: 120,
  textAlign: 'center',
  justifyContent: 'center',
  flexDirection: 'row',
});
const saveButtonTextStyle = StyleSheet.create<any>({
  color: colors.razorPurple,
  fontSize: 16,
  fontWeight: 'bold',
  marginTop: -4,
})

const styles = {
  modalViewStyle,
  captureButtonStyle,
  closeCrossStyle,
  imagePreviewStyle,
  buttonView,
  buttonStyle,
  saveButtonTextStyle,
}

export default styles;