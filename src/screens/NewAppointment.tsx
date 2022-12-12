import { View, Text } from "react-native";
import React, { useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppStackParamsList } from "../../App";
import Container from "../components/Container";
import IconButton from "../components/IconButton";
import { GoBackIcon, MoreIcon } from "../assets/Icons";

import DatePicker from "../components/DatePicker";

type Props = NativeStackScreenProps<AppStackParamsList, "NewAppointment">;
const NewAppointment = ({ navigation, route }: Props) => {
  const [date, setDate] = useState(new Date(1598051730000));
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const onConfirm = (values: any) => {
    console.log(values);
    setDatePickerVisibility(false);
    const date = new Date(values.year, values.month, values.day);
    setDate(date);
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Container>
        <View className="flex items-center w-full flex-1 dark:bg-black mb-6">
          <View className="flex w-full flex-row items-center justify-between px-4">
            <IconButton
              classes="bg-white p-0"
              onPress={() => navigation.goBack()}
            >
              <GoBackIcon fill="fill-black dark:fill-white" />
            </IconButton>
            <Text className="flex-1 text-center text-xl text-stone-900 dark:text-stone-100">
              New Appointment
            </Text>
            <IconButton outline={false} onPress={showDatePicker}>
              <MoreIcon fill="fill-black dark:fill-white" />
            </IconButton>
          </View>
          {date && <Text>{date.getFullYear() + "  - " + date.getMonth()}</Text>}
        </View>
      </Container>

      {isDatePickerVisible && (
        <DatePicker
          format="YYYY-MM"
          onConfirm={onConfirm}
          endYear={2042}
          initialValues={{
            year: date.getFullYear(),
            month: date.getMonth(),
            day: date.getDate(),
          }}
        />
      )}
    </View>
  );
};

export default NewAppointment;
