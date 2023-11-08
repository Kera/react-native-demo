import React from 'react';
import RenderHtml from 'react-native-render-html';
import {colors} from '../../commons/styles';

export const Button = () => {
  const buttonHtml = {
    html: `<div style='text-align:center;' value="hello world"/>`,
  };
  const buttonStyle = {
    input: {
      color: colors.razorPurple,
    },
  };
  return <RenderHtml source={buttonHtml} tagsStyles={buttonStyle} />;
};
