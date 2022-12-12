import { View, Text, Platform, ViewProps } from "react-native";
import React from "react";
import { Picker } from "@react-native-picker/picker";
import defaultTheme from "tailwindcss/defaultTheme";
import Button from "./Button";

type SelectedValues = {
  year: number;
  month: number;
  day: number;
};

type Props = {
  format?: "YYYY-MM-DD" | "YYYY-MM" | "YYYY";
  startYear?: number;
  endYear?: number;
  onCancel?: () => void;
  onConfirm?: (values: SelectedValues) => void;
  initialValues?: SelectedValues;
};
console.log(defaultTheme.fontSize.xl);

const DatePicker = (props: Props) => {
  const { initialValues } = props;
  const now = new Date();
  const startYear = props.startYear || now.getFullYear();
  const endYear = props.endYear || now.getFullYear() + 100;
  const format = props.format || "YYYY-MM-DD";

  if (endYear < startYear) {
    throw new Error("endYear must be greater than startYear");
  }

  const [year, setYear] = React.useState(
    initialValues ? initialValues.year : now.getFullYear()
  );
  const [month, setMonth] = React.useState(
    initialValues ? initialValues.month : now.getMonth() + 1
  );
  const [day, setDay] = React.useState(
    initialValues ? initialValues.day : now.getDate()
  );
  const OutFit = Platform.OS === "ios" ? IOSOutfit : AndroidOutfit;

  const onCancel = () => {
    props.onCancel && props.onCancel();
  };

  const onConfirm = () => {
    props.onConfirm && props.onConfirm({ year, month, day });
  };

  return (
    <View
      className="flex-1 w-full h-full absolute bg-black"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}
    >
      <OutFit>
        <View className="flex flex-row justify-between border-b-[1px] border-slate-300 px-2">
          <Button text="Cancel" onPress={onCancel} variant="link" />
          <Button text="OK" onPress={onConfirm} variant="link" />
        </View>
        {/* <View className="flex flex-row">
        {format.includes("YYYY") && (
          <Text className="flex-1 text-center text-lg">Year</Text>
        )}
        {format.includes("MM") && (
          <Text className="flex-1  text-center text-lg">Month</Text>
        )}
        {format.includes("DD") && (
          <Text className="flex-1  text-center text-lg">Day</Text>
        )}
      </View> */}
        <View className="flex flex-row">
          {format.includes("YYYY") && (
            <Picker
              selectedValue={year}
              onValueChange={(itemValue, itemIndex) => setYear(itemValue)}
              style={{ flex: 1 }}
            >
              {Array.from({ length: endYear - startYear + 1 }, (_, i) => (
                <Picker.Item
                  key={startYear + i}
                  label={(startYear + i).toString()}
                  value={startYear + i}
                />
              ))}
            </Picker>
          )}
          {format.includes("MM") && (
            <Picker
              selectedValue={month}
              onValueChange={(itemValue, itemIndex) => setMonth(itemValue)}
              style={{ flex: 1 }}
            >
              {Array.from({ length: 12 }, (_, i) => (
                <Picker.Item
                  key={i + 1}
                  label={(i + 1).toString()}
                  value={i + 1}
                />
              ))}
            </Picker>
          )}
          {format.includes("DD") && (
            <Picker
              selectedValue={day}
              onValueChange={(itemValue, itemIndex) => setDay(itemValue)}
              style={{ flex: 1 }}
            >
              {Array.from({ length: 31 }, (_, i) => (
                <Picker.Item
                  key={i + 1}
                  label={(i + 1).toString()}
                  value={i + 1}
                />
              ))}
            </Picker>
          )}
        </View>
      </OutFit>
    </View>
  );
};

const AndroidOutfit = ({ children }: ViewProps) => {
  return (
    <View className="flex-1 w-full h-full absolute items-center justify-center">
      <View className="bg-white w-5/6">{children}</View>
    </View>
  );
};

const IOSOutfit = ({ children }: ViewProps) => {
  return (
    <View className="flex-1 w-full bottom-0 absolute bg-white">{children}</View>
  );
};
export default DatePicker;
