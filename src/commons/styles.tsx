import { Colors } from "react-native/Libraries/NewAppScreen";
import { IsDarkMode } from "./Utils/Utils";

export const colors = {
  white: "#fff",
  black: "#000",
  clearBlue: "#1e90ff",
  razorPurple: "#9743ff",
};
export const backgroundStyle = {
  backgroundColor: IsDarkMode() ? Colors.darker : Colors.lighter,
  flex: 1,
};
