import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import React from "react";

type IconButtonProps = TouchableOpacityProps & {
  classes?: string;
  outline?: boolean;
};

const IconButton = (props: IconButtonProps) => {
  const { classes, children, outline = true, ...rest } = props;
  console.log("className", classes);
  const border = outline ? "border" : "";
  const containerClasses = `p-2 rounded-xl border-gray-300 w-10 h-10 items-center justify-center ${border} ${classes}`;
  return (
    <TouchableOpacity className={containerClasses}>{children}</TouchableOpacity>
  );
};

export default IconButton;
