import { View, Text, Image } from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppStackParamsList } from "../../App";
import Container from "../components/Container";
import IconButton from "../components/IconButton";
import {
  AchievementIcon,
  FilterIcon,
  GoBackIcon,
  MoreIcon,
  PeopleIcon,
  StarOIcon,
} from "../assets/Icons";
import { LinearGradient } from "expo-linear-gradient";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type Props = NativeStackScreenProps<AppStackParamsList, "DoctorDetail">;

const DoctorDetailScreen = ({ navigation, route }: Props) => {
  const { firstName, lastName, specialty, avatar, online } =
    route.params.doctor;

  const insets = useSafeAreaInsets();

  return (
    <View className="flex items-center w-full flex-1 dark:bg-black">
      <LinearGradient
        // Button Linear Gradient
        colors={["#FFFFFF", "#FCFAFA"]}
        className={`flex items-center w-full bg-gradient-to-r rounded-b-3xl  pb-4 px-7`}
      >
        <View className="flex w-full flex-row items-center justify-between mt-12">
          <IconButton
            classes="bg-white p-0"
            onPress={() => navigation.goBack()}
          >
            <GoBackIcon fill="fill-black dark:fill-white" />
          </IconButton>
          <IconButton outline={false}>
            <MoreIcon fill="fill-black dark:fill-white" />
          </IconButton>
        </View>
        <View className="w-full rounded-xl items-center">
          <View className="relative pb-4 rounded-full shadow-lg shadow-slate-300">
            <Image
              source={{ uri: avatar }}
              className="w-36 h-36 rounded-full"
            />
            {online && (
              <View className="absolute top-0 right-0 bg-primary rounded-full w-10 h-10 border-[6px] border-white" />
            )}
          </View>
          <Text className="text-xl font-bold mt-4">{`Dr. ${firstName} ${lastName}`}</Text>
          <Text className="text-md mt-2 font-light text-slate-700">
            {specialty}
          </Text>
        </View>
        <View className="flex-row w-full justify-between mt-5">
          <View className="w-[30%] bg-white shadow items-center h-32 rounded-2xl">
            <View className="bg-blue-200 w-12 items-center h-16 rounded-b-2xl justify-end">
              <IconButton outline={false}>
                <PeopleIcon fill="fill-blue-500" />
              </IconButton>
            </View>
            <View className="items-center flex-1 justify-center">
              <Text className="font-bold text-lg pt-2">1000+</Text>
              <Text className="font-light text-slate-700">Patients</Text>
            </View>
          </View>
          <View className="w-[30%] bg-white shadow items-center h-32 rounded-2xl">
            <View className="bg-pink-200 w-12 items-center h-16 rounded-b-2xl justify-end">
              <IconButton outline={false}>
                <AchievementIcon fill="fill-pink-500" />
              </IconButton>
            </View>
            <View className="items-center flex-1 justify-center">
              <Text className="font-bold text-lg pt-2">10 Yrs</Text>
              <Text className="font-light text-slate-700">Experience</Text>
            </View>
          </View>
          <View className="w-[30%] bg-white shadow items-center h-32 rounded-2xl">
            <View className="bg-amber-200 w-12 items-center h-16 rounded-b-2xl justify-end">
              <IconButton outline={false}>
                <StarOIcon fill="fill-amber-500" />
              </IconButton>
            </View>
            <View className="items-center flex-1 justify-center">
              <Text className="font-bold text-lg pt-2">4.5</Text>
              <Text className="font-light text-slate-700">Ratings</Text>
            </View>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

export default DoctorDetailScreen;
