import {PermissionsAndroid} from 'react-native';

export const requestPermission = async (
  permissionLabel: string,
  callback: Function,
) => {
  try {
    await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS[permissionLabel],
    ).then(result => callback(result));
  } catch (err) {
    console.log(err);
  }
};
