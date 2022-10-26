import React, { useEffect } from "react";
import { useColorScheme } from "nativewind";

const useColorModeValue = (light: string, dark: string) => {
  const { colorScheme } = useColorScheme();
  const [color, setColor] = React.useState<"dark" | "light">("light");

  useEffect(() => {
    setColor(colorScheme);
  }, [colorScheme]);

  return color === "dark" ? dark : light;
};

export default useColorModeValue;
