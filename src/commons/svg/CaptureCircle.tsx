import Svg, {Circle} from 'react-native-svg';
import React from 'react';

function CaptureCircle({
  backgroundColor = 'transparent',
  borderColor = '#999999',
  height = 100,
  width = 100,
}: {
  backgroundColor?: string;
  borderColor?: string;
  height?: number;
  width?: number;
}) {
  return (
    <Svg width={width} height={height}>
      <Circle
        cx="50"
        cy="50"
        r="40"
        fill={backgroundColor}
        stroke={borderColor}
        strokeWidth="4"
      />
    </Svg>
  );
}

export default CaptureCircle;
