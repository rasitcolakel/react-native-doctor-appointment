import { View, Text, ViewProps } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = ViewProps & {};

const Container = (props: Props) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <View className="flex px-4 flex-1">{props.children}</View>
    </SafeAreaView>
  );
};

export default Container;
