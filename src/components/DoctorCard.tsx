import { View, Text, Image } from "react-native";
import React from "react";
import { DoctorCardType } from "../utils/generator";

type Props = DoctorCardType & {
  isLeft?: boolean;
  onPress?: () => void;
};

const DoctorCard = (props: Props) => {
  const { firstName, lastName, specialty, avatar, online, onPress } = props;
  const isLeft = props.isLeft ? "pr-2" : "pl-2";
  return (
    <View className={"flex w-full items-center shadow-lg " + isLeft}>
      <View className="flex-1 w-full rounded-xl  bg-white items-center shadow-sm my-3 mx-2 py-6">
        <View className="relative pb-4">
          <Image source={{ uri: avatar }} className="w-32 h-32 rounded-full" />
          {online && (
            <View className="absolute top-0 right-0 bg-primary rounded-full w-8 h-8 border-[6px] border-white" />
          )}
        </View>
        <Text className="text-lg font-bold">{`Dr. ${firstName} ${lastName[0]}`}</Text>
        <Text className="text-md">{specialty}</Text>
      </View>
    </View>
  );
};

export default DoctorCard;
