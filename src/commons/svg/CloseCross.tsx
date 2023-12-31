import Svg, { Path } from "react-native-svg";
import React from "react";

function CloseCross({
  color = "#999999",
  height = 100,
  width = 100,
}: {
  color?: string;
  height?: number;
  width?: number;
}) {
  return (
    <Svg fill={color} width={width} height={height}>
      <Path d="M512.481 421.906L850.682 84.621c25.023-24.964 65.545-24.917 90.51.105s24.917 65.545-.105 90.51L603.03 512.377 940.94 850c25.003 24.984 25.017 65.507.033 90.51s-65.507 25.017-90.51.033L512.397 602.764 174.215 940.03c-25.023 24.964-65.545 24.917-90.51-.105s-24.917-65.545.105-90.51l338.038-337.122L84.14 174.872c-25.003-24.984-25.017-65.507-.033-90.51s65.507-25.017 90.51-.033L512.48 421.906z" />
    </Svg>
  );
}

export default CloseCross;
