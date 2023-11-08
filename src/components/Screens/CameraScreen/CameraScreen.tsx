import React, {useRef, useState} from 'react';
import {
  useCameraPermission,
  useCameraDevice,
  Camera,
} from 'react-native-vision-camera';
import {
  Text,
  View,
  SafeAreaView,
  AppState,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Image,
} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
import RNFS from 'react-native-fs';
import {backgroundStyle} from '../../../commons/Utils/Utils';
import {colors} from '../../../commons/Colors';
import CaptureCircle from '../../svg/CaptureCircle';
import CloseCross from '../../svg/CloseCross';
import {captureButtonStyle, closeCrossStyle} from './CameraScreen.style';

const CameraScreen = (): React.ReactNode => {
  const {hasPermission, requestPermission} = useCameraPermission();
  !hasPermission && requestPermission();

  const [isModalVisible, setModalVisibility] = useState<boolean>(false);
  const [photoPath, setPhotoPath] = useState<string>('');
  const device = useCameraDevice('back');
  const isFocused = useIsFocused();
  const camera = useRef<Camera>(null);
  const appState = useRef(AppState.currentState);

  const takePic = async () => {
    try {
      camera.current &&
        (await camera.current
          .takePhoto({enableShutterSound: false})
          .then(res => {
            console.log(res);
            setPhotoPath(res.path);
            setModalVisibility(true);
          }));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <View style={{...backgroundStyle}}>
        {hasPermission && device && (
          <>
            <Camera
              device={device}
              isActive={isFocused && appState.current === 'active'}
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
      <View>
        <Modal visible={isModalVisible}>
          <TouchableOpacity
            style={closeCrossStyle}
            onPress={() => {
              setModalVisibility(false);
            }}>
            <CloseCross backgroundColor={colors.razorPurple} width={100} />
          </TouchableOpacity>
          {photoPath && <Image source={{uri: photoPath}} />}
        </Modal>
      </View>
    </SafeAreaView>
  );
};

export default CameraScreen;
