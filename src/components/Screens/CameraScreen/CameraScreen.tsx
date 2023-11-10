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
import RNFS from "react-native-fs";
import { backgroundStyle } from "../../../commons/styles";
import { colors } from "../../../commons/styles";
import CaptureCircle from "../../svg/CaptureCircle";
import CloseCross from "../../svg/CloseCross";
import DismissIcon from "../../svg/DismissIcon";
import SaveIcon from "../../svg/SaveIcon";
import styles from "./CameraScreen.style";

const CameraScreen = (): React.ReactNode => {
  const { hasPermission, requestPermission } = useCameraPermission();
  !hasPermission && requestPermission();

  const [isModalVisible, setModalVisibility] = useState<boolean>(false);
  const [photoPath, setPhotoPath] = useState<string>("");
  const device = useCameraDevice("back");
  const isFocused = useIsFocused();
  const camera = useRef<Camera>(null);
  const appState = useRef(AppState.currentState);

  const takePic = async () => {
    try {
      camera.current &&
        (await camera.current
          .takePhoto({ enableShutterSound: false })
          .then((res) => {
            setPhotoPath(res.path);
            setModalVisibility(true);
          }));
    } catch (err) {
      console.log(err);
    }
  };
  const savePics = async () => {
    const pathSegments = photoPath.split("/");
    const fileName = pathSegments[pathSegments.length - 1];
    await RNFS.moveFile(photoPath, `${RNFS.DocumentDirectoryPath}/${fileName}`);
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <View style={backgroundStyle}>
        {hasPermission && device && (
          <>
            <Camera
              device={device}
              isActive={isFocused && appState.current === "active"}
              photo={true}
              ref={camera}
              style={StyleSheet.absoluteFill}
            />
            <TouchableOpacity
              onPress={takePic}
              style={styles.captureButtonStyle}
            >
              <CaptureCircle borderColor={colors.razorPurple} />
            </TouchableOpacity>
          </>
        )}
      </View>

      <Modal visible={isModalVisible} transparent={true}>
        <View style={styles.modalViewStyle}>
          {photoPath && (
            <>
              <Image
                style={styles.imagePreviewStyle}
                source={{ uri: "file://" + photoPath }}
              />
              <View style={styles.buttonView}>
                <TouchableOpacity style={styles.buttonStyle} onPress={() => {
                  savePics().then(() => {
                    setModalVisibility(false);
                  })
                }}>
                  <Text style={styles.saveButtonTextStyle}>Save</Text>
                  <SaveIcon color={colors.razorPurple} height={20} width={20} />
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.buttonStyle}
                  onPress={() => {
                    setModalVisibility(false);
                  }}
                >
                  <Text style={styles.saveButtonTextStyle}>Dismiss</Text>
                  <DismissIcon
                    color={colors.razorPurple}
                    height={18}
                    width={20}
                  />
                </TouchableOpacity>
              </View>
            </>
          )}
          <TouchableOpacity
            style={styles.closeCrossStyle}
            onPress={() => {
              setModalVisibility(false);
            }}
          >
            <CloseCross color={colors.razorPurple} width={30} />
          </TouchableOpacity>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default CameraScreen;
