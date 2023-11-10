import React from "react";
import { colors } from "../../commons/styles";
import Toast, { BaseToast, ErrorToast } from "react-native-toast-message";

export const toastConfig = () => {
  return {
    success: (props: any) => (
      <BaseToast
        {...props}
        style={{
          borderLeftWidth: 0,
          borderRadius: 0,
          backgroundColor: "rgba(0, 0, 0, 0.7)",
        }}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        text1Style={{
          color: colors.razorPurple,
          fontSize: 14,
          fontWeight: 700,
        }}
        text2Style={{
          color: colors.razorPurple,
          fontSize: 12,
        }}
      />
    ),
    error: (props: any) => (
      <ErrorToast
        {...props}
        style={{
          borderLeftWidth: 0,
          borderRadius: 0,
          backgroundColor: "rgba(0, 0, 0, 0.7)",
        }}
        text1Style={{
          color: colors.red,
          fontSize: 14,
          fontWeight: 700,
        }}
        text2Style={{
          color: colors.red,
          fontSize: 12,
        }}
      />
    ),
  };
};

export const showToast = (
  type: string = "success",
  text1: string = "",
  text2: string = ""
) => {
  setTimeout(() => {
    Toast.show({
      type,
      text1,
      ...(text2 && { text2 }),
      visibilityTime: 3000,
      topOffset: 60,
    });
  }, 300);
};
