import { View, Text, ViewProps, StatusBar } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = ViewProps & {};

const Container = (props: Props) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
      className="bg-white dark:bg-black android:py-2"
    >
      <StatusBar barStyle="light-content" />
      <View className="flex px-4 flex-1 dark:bg-black">{props.children}</View>
    </SafeAreaView>
  );
};

export default Container;
