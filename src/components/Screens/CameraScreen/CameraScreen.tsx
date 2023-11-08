import React, { useRef, useState } from "react";
import {
  useCameraPermission,
  useCameraDevice,
  Camera,
} from "react-native-vision-camera";
import {
  Text,
  View,
  SafeAreaView,
  AppState,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Image,
} from "react-native";
import { useIsFocused } from "@react-navigation/native";
import { useWindowDimensions } from "react-native";
import RNFS from "react-native-fs";
import { backgroundStyle } from "../../../commons/styles";
import { colors } from "../../../commons/styles";
import CaptureCircle from "../../svg/CaptureCircle";
import CloseCross from "../../svg/CloseCross";
import {
  captureButtonStyle,
  closeCrossStyle,
  modalViewStyle,
  imagePreviewStyle,
} from "./CameraScreen.style";

const CameraScreen = (): React.ReactNode => {
  const { hasPermission, requestPermission } = useCameraPermission();
  !hasPermission && requestPermission();

  const [isModalVisible, setModalVisibility] = useState<boolean>(false);
  const [photoPath, setPhotoPath] = useState<string>("");
  const device = useCameraDevice("back");
  const isFocused = useIsFocused();
  const camera = useRef<Camera>(null);
  const appState = useRef(AppState.currentState);
  const windowSizes = useWindowDimensions();

  const takePic = async () => {
    try {
      camera.current &&
        (await camera.current
          .takePhoto({ enableShutterSound: false })
          .then((res) => {
            fetch("file://" + res.path).then((tof) => {
              console.log(tof);
            });
            setPhotoPath(res.path);
            setModalVisibility(true);
          }));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <View style={{ ...backgroundStyle }}>
        {hasPermission && device && (
          <>
            <Camera
              device={device}
              isActive={isFocused && appState.current === "active"}
              photo={true}
              ref={camera}
              style={StyleSheet.absoluteFill}
            />
            <TouchableOpacity onPress={takePic} style={captureButtonStyle}>
              <CaptureCircle borderColor={colors.razorPurple} />
            </TouchableOpacity>
          </>
        )}
      </View>

      <Modal visible={isModalVisible} transparent={true}>
        <View style={modalViewStyle(windowSizes)}>
          {photoPath && (
            <Image
              style={imagePreviewStyle}
              source={{ uri: "file://" + photoPath }}
            />
          )}
          <TouchableOpacity
            style={closeCrossStyle}
            onPress={() => {
              setModalVisibility(false);
            }}
          >
            <CloseCross backgroundColor={colors.razorPurple} width={30} />
          </TouchableOpacity>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default CameraScreen;
