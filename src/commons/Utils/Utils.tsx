import { useColorScheme } from "react-native";

export const IsDarkMode = () => {
  return useColorScheme() === "dark";
};
