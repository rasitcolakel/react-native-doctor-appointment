import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import React from "react";

type IconButtonProps = TouchableOpacityProps & {
  classes?: string;
};

const IconButton = (props: IconButtonProps) => {
  const { classes, children, ...rest } = props;
  console.log("className", classes);
  const containerClasses = `p-2 rounded-xl border border-gray-300 w-10 h-10 items-center justify-center ${classes}`;
  return (
    <TouchableOpacity className={containerClasses}>{children}</TouchableOpacity>
  );
};

export default IconButton;
