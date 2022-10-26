import { View, Text, TextInput, TouchableWithoutFeedback } from "react-native";
import React from "react";
import colors from "tailwindcss/colors";
import useColorModeValue from "../assets/hooks/useColorModeValue";
import { SearchIcon } from "../assets/Icons";
import IconButton from "./IconButton";

type Props = {};

const DoctorSearchInput = (props: Props) => {
  const [searchText, setSearchText] = React.useState<string>("");
  const ref = React.useRef<TextInput>(null);

  const focusInput = () => {
    ref.current?.focus();
  };

  return (
    <TouchableWithoutFeedback onPress={focusInput}>
      <View className="flex-row items-center  bg-gray-200 rounded-xl dark:bg-slate-900 my-4 px-4">
        <View>
          <SearchIcon fill="fill-gray-500" />
        </View>
        <TextInput
          ref={ref}
          placeholder="Search for doctors"
          placeholderTextColor={colors.gray[500]}
          className="p-2 py-4 text-gray-500"
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default DoctorSearchInput;
