import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import React from "react";

type ButtonProps = TouchableOpacityProps & {
  text?: string;
  variant?:
    | "primary"
    | "secondary"
    | "danger"
    | "warning"
    | "success"
    | "info"
    | "link";
  children?: React.ReactNode;
  outline?: boolean;
  size?: "xs" | "sm" | "md" | "lg";
  disabled?: boolean;
  className?: string;
  textClassName?: string;
  full?: boolean;
};

const Button = (props: ButtonProps) => {
  const colors = {
    primary: {
      bg: "bg-primary",
      text: "text-white",
      textOutline: "text-primary-500",
      border: "border-primary-500",
    },
    secondary: {
      bg: "bg-primary-200",
      text: "text-primary-500",
      textOutline: "text-primary-500",
      border: "border-primary-200",
    },
    danger: {
      bg: "bg-red-500",
      text: "text-white",
      textOutline: "text-red-500",
      border: "border-red-500",
    },
    warning: {
      bg: "bg-amber-500",
      text: "text-white",
      textOutline: "text-amber-500",
      border: "border-amber-500",
    },
    success: {
      bg: "bg-green-500",
      text: "text-white",
      textOutline: "text-green-500",
      border: "border-green-500",
    },
    info: {
      bg: "bg-blue-500",
      text: "text-white",
      textOutline: "text-blue-500",
      border: "border-blue-500",
    },
    link: {
      bg: "bg-transparent",
      text: "text-primary-500",
      textOutline: "text-primary-500",
      border: "border-transparent",
    },
  };

  const sizes = {
    xs: {
      text: "text-xs",
      px: "px-2",
      py: "py-1",
    },
    sm: {
      text: "text-sm",
      py: "py-1",
      px: "px-2",
    },
    md: {
      text: "text-base",
      py: "py-2",
      px: "px-4",
    },
    lg: {
      text: "text-lg",
      py: "py-3",
      px: "px-6",
    },
  };

  const {
    text,
    variant = "primary",
    outline = false,
    size = "md",
    disabled = false,
    className = "",
    textClassName = "",
    full = false,
    ...rest
  } = props;

  const color = colors[variant];
  const sizeStyle = sizes[size];

  const bg = outline ? "bg-transparent" : color.bg;
  const textColor = outline ? color.textOutline : color.text;
  const border = outline ? color.border : "border-transparent";
  const borderWidth = outline ? "border" : "border-0";
  const opacity = disabled ? "opacity-50" : "opacity-100";
  const width = full ? "w-full" : "";

  const containerClasses = `rounded-md ${opacity} ${bg} ${textColor} ${border} ${borderWidth} ${sizeStyle.text} ${sizeStyle.py} ${sizeStyle.px} font-bold ${width} ${className}`;

  const textClasses = `text-center ${textColor} ${sizeStyle.text} ${textClassName}`;

  return (
    <TouchableOpacity
      className={containerClasses}
      disabled={disabled}
      {...rest}
    >
      {text && <Text className={textClasses}>{text}</Text>}
    </TouchableOpacity>
  );
};

export default Button;
