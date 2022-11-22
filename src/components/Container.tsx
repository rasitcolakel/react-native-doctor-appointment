import {
  View,
  ViewProps,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  SafeAreaView,
} from "react-native";
import React from "react";
import useColorModeValue from "../assets/hooks/useColorModeValue";

type Props = ViewProps & {
  keyboardAvoiding?: boolean;
};

const Container = (props: Props) => {
  const { children, keyboardAvoiding, ...rest } = props;

  const innerComponent = (
    <SafeAreaView
      style={{
        flex: 1,
      }}
      className="bg-slate-100 dark:bg-black android:py-2"
    >
      <StatusBar
        backgroundColor={useColorModeValue("#fff", "#000")}
        barStyle={useColorModeValue("dark-content", "light-content") as any}
      />
      <View className="flex px-4 flex-1 dark:bg-black">{props.children}</View>
    </SafeAreaView>
  );

  if (keyboardAvoiding) {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          {innerComponent}
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }

  return innerComponent;
};

export default Container;
