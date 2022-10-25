import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import React from "react";

type IconButtonProps = TouchableOpacityProps & {
  classes?: string;
  outline?: boolean;
};

const IconButton = (props: IconButtonProps) => {
  const { classes, children, outline = true, ...rest } = props;
  const border = outline ? "border" : "";
  const containerClasses = `p-2 rounded-xl border-gray-300 w-10 h-10 items-center justify-center ${border} ${classes}`;
  const darkClasses = ` dark:bg-black dark:text-white dark:border-gray-700`;
  return (
    <TouchableOpacity className={containerClasses + darkClasses} {...props}>
      {children}
    </TouchableOpacity>
  );
};

export default IconButton;
