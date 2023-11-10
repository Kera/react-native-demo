import Svg, { Path } from "react-native-svg";
import React from "react";

function SaveIcon({
  color = "#999999",
  height = 100,
  width = 100,
}: {
  color?: string;
  height?: number;
  width?: number;
}) {
  return (
    <Svg width={width} height={height}>
      <Path
        d="m 8 0 c -0.550781 0 -1 0.449219 -1 1 v 8.585938 l -1.292969 -1.292969 c -0.1875 -0.1875 -0.441406 -0.292969 -0.707031 -0.292969 s -0.519531 0.105469 -0.707031 0.292969 c -0.390625 0.390625 -0.390625 1.023437 0 1.414062 l 3 3 c 0.390625 0.390625 1.023437 0.390625 1.414062 0 l 3 -3 c 0.390625 -0.390625 0.390625 -1.023437 0 -1.414062 s -1.023437 -0.390625 -1.414062 0 l -1.292969 1.292969 v -8.585938 c 0 -0.550781 -0.449219 -1 -1 -1 z m -7 14 v 2 h 14 v -2 z m 0 0"
        fill={color}
      />
    </Svg>
  );
}

export default SaveIcon;
