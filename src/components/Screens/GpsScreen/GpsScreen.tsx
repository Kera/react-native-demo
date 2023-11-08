import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  PermissionsAndroid,
  Linking,
} from "react-native";
import { Button } from "react-native";
import Geolocation from "react-native-geolocation-service";
import { backgroundStyle } from "../../../commons/styles";
import Section from "../../Section/Section";

interface Coordinates {
  coords: {
    latitude: Number;
    longitude: Number;
  };
}

const GpsScreen = (): React.ReactNode => {
  const [locationAccessStatus, setLocationAccessStatus] = useState<
    string | undefined
  >(undefined);
  const [hasLocationAccess, setLocationAccess] = useState<boolean | undefined>(
    undefined
  );
  const [coordinates, setCoordinates] = useState<Coordinates | undefined>(
    undefined
  );
  const [coordinatesLitteral, setCoordinatesLitteral] = useState<string>("");
  const checkLocationAccess: any = async () => {
    await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
    ).then((res) => {
      setLocationAccess(res);
    });
  };
  const requestLocationPermission = async () => {
    try {
      await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
      ).then((access) => {
        setLocationAccessStatus(access);
        setLocationAccess(
          access === PermissionsAndroid.RESULTS.GRANTED ? true : false
        );
      });
    } catch (err) {
      console.log(err);
    }
  };
  const getUserLocation = () => {
    Geolocation.getCurrentPosition(
      (pos) => {
        setCoordinates(pos);
        setCoordinatesLitteral(
          `${pos?.coords.latitude}, ${pos?.coords.longitude}`
        );
      },
      (error) => {
        console.log(error.message);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  };

  if (hasLocationAccess === undefined) {
    checkLocationAccess();
  } else if (
    !hasLocationAccess &&
    locationAccessStatus !== PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN
  ) {
    requestLocationPermission();
  } else if (coordinates === undefined && hasLocationAccess) {
    getUserLocation();
  }

  return (
    <SafeAreaView style={backgroundStyle}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}
      >
        <View style={backgroundStyle}>
          <Section title="Your position : ">
            {coordinates !== undefined && (
              <>
                <Text>{coordinatesLitteral}</Text>
              </>
            )}

            {!hasLocationAccess &&
              locationAccessStatus !==
                PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN && (
                <>
                  <Text>
                    The app doesn't have access to your location.
                    {"\n"}
                  </Text>
                  <Button
                    onPress={() => {
                      requestLocationPermission();
                    }}
                    title="Grant access to my location"
                  />
                </>
              )}

            {!hasLocationAccess &&
              locationAccessStatus ===
                PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN && (
                <>
                  <Text>
                    The app cannot ask for your location anymore, this can be
                    changed in app settings.
                    {"\n"}
                  </Text>
                  <Button
                    onPress={() => {
                      Linking.openSettings();
                    }}
                    title="Open app settings"
                  />
                </>
              )}
          </Section>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default GpsScreen;
